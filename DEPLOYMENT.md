# Deployment Guide: Cloudflare Workers with Custom Domain

This project is configured to deploy to Cloudflare Workers with a custom domain at `shamitbagchi.com`.

## Prerequisites

1. **Cloudflare Account**: You need an active Cloudflare account
2. **Domain**: `shamitbagchi.com` should be added to your Cloudflare account
3. **Wrangler CLI**: Install with `npm install -g @cloudflare/wrangler` or use `npx wrangler`

## Configuration Files

### `wrangler.toml`
- Defines Cloudflare Workers deployment settings
- Configures custom domain routing for `shamitbagchi.com` and `www.shamitbagchi.com`
- Sets build commands and output format for Nitro

### `nitro.config.ts`
- Nitro framework configuration
- Specifies Cloudflare Workers module preset
- Configures prerender routes and middleware

### `vite.config.ts`
- Already configured to use Cloudflare as default Nitro target
- Uses TanStack Start with custom server entry point

## Deployment Steps

### 1. Setup Wrangler Authentication
```bash
wrangler login
```

This opens a browser to authenticate with your Cloudflare account.

### 2. Configure Your Cloudflare Domain

Ensure `shamitbagchi.com` is added to your Cloudflare account and uses Cloudflare nameservers.

### 3. Create or Update Routes in Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Your Domain
2. Navigate to **Workers Routes**
3. Add these routes pointing to your worker:
   - `shamitbagchi.com/*` → `bloodstone-lovable`
   - `www.shamitbagchi.com/*` → `bloodstone-lovable`

### 4. Build and Deploy

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Workers
wrangler deploy
```

### 5. Verify Deployment

Test your deployment:
```bash
# Test the custom domain
curl https://shamitbagchi.com/

# Or open in browser
open https://shamitbagchi.com/
```

## Environment-Specific Deployments

### Production Deployment
```bash
wrangler deploy --env production
```

### Staging Deployment
```bash
wrangler deploy --env staging
```

## Troubleshooting

### Issue: "Could not find wrangler.toml"
**Solution**: Ensure you're in the project root directory when running `wrangler deploy`.

### Issue: "Authentication failed"
**Solution**: Run `wrangler login` and ensure you have the correct Cloudflare account access.

### Issue: "Route not found" after deployment
**Solution**: 
1. Check Cloudflare Dashboard → Workers → Routes
2. Ensure routes are pointing to the correct worker
3. Clear browser cache and try again

### Issue: Build failures
**Solution**:
```bash
# Clean build artifacts
rm -rf dist .output .nitro

# Rebuild
npm run build

# Check for build errors
npm run build --verbose
```

## Monitoring and Logs

### View Real-Time Logs
```bash
wrangler tail --env production
```

### View Deployment History
```bash
wrangler deployments list
```

## Performance Optimization

1. **Enable Caching**: Use Cloudflare's cache settings in the dashboard
2. **Use KV Storage** (Optional): For persistent data storage
3. **Enable Compression**: Automatically enabled by Cloudflare

## Security

- Ensure `shamitbagchi.com` has SSL/TLS enabled (Flexible or Full)
- Set security headers in `nitro.config.ts` (already configured)
- Keep dependencies updated: `npm audit` and `npm update`

## Rollback

To rollback to a previous version:
```bash
wrangler deployments list
wrangler rollback --version <VERSION_ID>
```

## Additional Resources

- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/cli-wrangler/)
- [Nitro Cloudflare Preset](https://nitro.unjs.io/deploy/providers/cloudflare)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
