#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_NAME = 'benvg-blog'; // Update this to match your Cloudflare Pages project name

/**
 * Execute a command and return the output
 */
function execCommand(command, options = {}) {
  try {
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: 'pipe',
      ...options
    });
    return { success: true, output: output.trim() };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout?.toString() || '' };
  }
}

/**
 * Check if Cloudflare API token is configured
 */
function checkApiToken() {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    console.error('❌ CLOUDFLARE_API_TOKEN environment variable is not set.');
    console.error('Please create an API token at: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/');
    console.error('Then set it in your environment: export CLOUDFLARE_API_TOKEN=your_token_here');
    process.exit(1);
  }
  return token;
}

/**
 * Get the latest deployment status
 */
async function getDeploymentStatus() {
  console.log('📊 Checking deployment status...\n');
  
  // List deployments
  const deploymentResult = execCommand(`npx wrangler pages deployment list --project-name=${PROJECT_NAME} --limit=5`);
  
  if (!deploymentResult.success) {
    console.error('❌ Failed to get deployments:', deploymentResult.error);
    return;
  }

  console.log('📋 Recent Deployments:');
  console.log(deploymentResult.output);
  console.log('\n' + '='.repeat(50) + '\n');

  // Get project info
  const projectResult = execCommand(`npx wrangler pages project list`);
  
  if (projectResult.success) {
    console.log('🏗️  Projects:');
    console.log(projectResult.output);
  }
}

/**
 * Monitor deployment logs
 */
async function monitorLogs() {
  console.log('📊 Starting log monitoring...');
  console.log('Press Ctrl+C to stop monitoring\n');
  
  const logResult = execCommand(`npx wrangler pages deployment tail --project-name=${PROJECT_NAME}`, {
    stdio: 'inherit'
  });
  
  if (!logResult.success) {
    console.error('❌ Failed to start log monitoring:', logResult.error);
  }
}

/**
 * Get deployment URL
 */
async function getDeploymentUrl() {
  const result = execCommand(`npx wrangler pages project list --format=json`);
  
  if (!result.success) {
    console.error('❌ Failed to get project info:', result.error);
    return;
  }

  try {
    const projects = JSON.parse(result.output);
    const project = projects.find(p => p.name === PROJECT_NAME);
    
    if (project) {
      console.log(`🌐 Project URL: https://${project.subdomain}.pages.dev`);
      console.log(`🔗 Custom Domain: ${project.domains?.[0] || 'Not configured'}`);
    } else {
      console.log(`❌ Project '${PROJECT_NAME}' not found`);
    }
  } catch (error) {
    console.error('❌ Failed to parse project info:', error.message);
  }
}

/**
 * Main function
 */
async function main() {
  const command = process.argv[2];

  // Check API token first
  checkApiToken();

  switch (command) {
    case 'status':
      await getDeploymentStatus();
      break;
    case 'logs':
      await monitorLogs();
      break;
    case 'url':
      await getDeploymentUrl();
      break;
    case 'help':
    default:
      console.log(`
🚀 Cloudflare Pages Deployment Monitor

Usage: node scripts/deploy-monitor.js <command>

Commands:
  status    - Show recent deployment status
  logs      - Monitor deployment logs in real-time
  url       - Show deployment URLs
  help      - Show this help message

Environment Variables:
  CLOUDFLARE_API_TOKEN - Your Cloudflare API token (required)

Setup:
1. Create API token: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
2. Set environment variable: export CLOUDFLARE_API_TOKEN=your_token_here
3. Update PROJECT_NAME in this script to match your Cloudflare Pages project

Examples:
  node scripts/deploy-monitor.js status
  node scripts/deploy-monitor.js logs
  node scripts/deploy-monitor.js url
      `);
      break;
  }
}

main().catch(console.error);