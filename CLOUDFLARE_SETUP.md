# Cloudflare Deployment Monitoring Setup

This guide will help you set up monitoring for your Cloudflare Pages deployment.

## 1. Create a Cloudflare API Token

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use the "Custom token" template
4. Configure the token with these permissions:
   - **Zone**: `Zone:Read`
   - **Account**: `Cloudflare Pages:Edit`
   - **Zone Resources**: `Include - All zones`
   - **Account Resources**: `Include - All accounts`

## 2. Set Environment Variable

Add your API token to your environment:

```bash
# Add to your shell profile (.bashrc, .zshrc, etc.)
export CLOUDFLARE_API_TOKEN="your_token_here"

# Or create a .env file (not committed to git)
echo "CLOUDFLARE_API_TOKEN=your_token_here" > .env
```

## 3. Update Project Name

Edit `scripts/deploy-monitor.js` and update the `PROJECT_NAME` variable to match your Cloudflare Pages project name:

```javascript
const PROJECT_NAME = 'benvg-blog'; // Update this to your actual project name
```

## 4. Available Commands

Once configured, you can use these commands:

```bash
# Check deployment status
npm run deploy:status

# Monitor logs in real-time
npm run deploy:logs

# Get deployment URLs
npm run deploy:url

# Show help
npm run deploy:monitor
```

## 5. Finding Your Project Name

If you're not sure of your project name, you can:

1. Check your Cloudflare Pages dashboard
2. Look at your repository settings in Cloudflare
3. Use the Wrangler CLI: `npx wrangler pages project list`

## 6. Security Notes

- Never commit your API token to version control
- Use a `.env` file or environment variables
- Consider using a token with minimal required permissions
- Regularly rotate your API tokens

## 7. Troubleshooting

### "command not found: wrangler"
- The project includes Wrangler as a dev dependency
- Always use `npx wrangler` instead of `wrangler`

### "CLOUDFLARE_API_TOKEN is not set"
- Make sure you've set the environment variable
- Restart your terminal after setting the variable
- Check that the token has the correct permissions

### "Project not found"
- Verify the `PROJECT_NAME` in the script matches your actual project name
- Check that your API token has access to the correct account

## 8. Integration with Claude Code

Once set up, you can ask Claude Code to:
- Check deployment status
- Monitor logs for errors
- Get deployment URLs
- Troubleshoot deployment issues

Example commands for Claude Code:
- "Check my Cloudflare deployment status"
- "Monitor my deployment logs"
- "What's the current deployment URL?"