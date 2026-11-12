# Deployment Checklist for shamitbagchi.com

Use this checklist before your first deployment to Cloudflare Workers with the custom domain.

## Prerequisites ✓

- [ ] Cloudflare account created
- [ ] `shamitbagchi.com` added to your Cloudflare account
- [ ] Domain nameservers set to Cloudflare
- [ ] Wrangler CLI installed: `npm install -g @cloudflare/wrangler`

## Configuration ✓

- [ ] `wrangler.toml` - ✓ Already configured
- [ ] Routes configured for `shamitbagchi.com` and `www.shamitbagchi.com`
- [ ] Build settings configured in `wrangler.toml`

## Cloudflare Dashboard Setup

Before first deployment, configure in Cloudflare Dashboard:

1. **Domain Setup**
   - [ ] Verify domain is active in Cloudflare
   - [ ] Check DNS records (should show Cloudflare nameservers)
   - [ ] SSL/TLS set to "Flexible" or "Full" (at minimum "Flexible" for Workers)

2. **Workers Configuration**
   - [ ] Go to **Workers & Pages** → **Overview**
   - [ ] Create a new Worker named `bloodstone-lovable` (or use existing)
   - [ ] Navigate to **Routes**
   - [ ] Add these routes:
     ```
     https://shamitbagchi.com/*    → bloodstone-lovable
     https://www.shamitbagchi.com/* → bloodstone-lovable
     ```

3. **Environment Setup** (Optional)
   - [ ] For staging: Add route for `https://staging.shamitbagchi.com/*`
   - [ ] Create different environments if needed

## Pre-Deployment

- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Build project: `npm run build`
- [ ] Verify build output in `.output/server/` directory

## First Deployment

### Authenticate with Cloudflare
```bash
wrangler login
```

### Deploy to Production
```bash
# Deploy to production
wrangler deploy --env production
```

### Verify Deployment
```bash
# Test your deployment
curl https://shamitbagchi.com/

# Or open in browser
open https://shamitbagchi.com/
```

### Check Logs
```bash
# View real-time logs
wrangler tail --env production
```

## Post-Deployment Verification

- [ ] Homepage loads at `https://shamitbagchi.com/`
- [ ] Homepage loads at `https://www.shamitbagchi.com/`
- [ ] All routes work correctly (check a few key pages)
- [ ] Static assets load correctly (CSS, images, fonts)
- [ ] No console errors in browser DevTools
- [ ] Check in different browsers

## DNS Verification

- [ ] `shamitbagchi.com` resolves to Cloudflare Worker
- [ ] `www.shamitbagchi.com` resolves to Cloudflare Worker
- [ ] SSL certificate is valid and auto-renews
- [ ] Check with: `nslookup shamitbagchi.com`

## Performance & Security

- [ ] Enable caching in Cloudflare Dashboard (if desired)
- [ ] Set security level appropriately
- [ ] Enable DDoS protection
- [ ] Review Worker Analytics (if available)

## Git & Repository

- [ ] Commit `wrangler.toml` to repository: `git add wrangler.toml && git commit -m "Configure Cloudflare Workers deployment"`
- [ ] Push to main branch
- [ ] Update README.md with new deployment URL

## Continuous Deployment (Optional)

To enable automatic deployments from GitHub:

1. [ ] Create GitHub Actions workflow (example below)
2. [ ] Store Cloudflare credentials as GitHub secrets
3. [ ] Test workflow on feature branch

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          environment: production
```

Set these secrets in GitHub:
- [ ] `CLOUDFLARE_API_TOKEN` - Create at Cloudflare Dashboard
- [ ] `CLOUDFLARE_ACCOUNT_ID` - Copy from Cloudflare Dashboard

## Monitoring

- [ ] Set up error alerts
- [ ] Monitor worker logs regularly
- [ ] Check performance metrics
- [ ] Set up uptime monitoring (optional)

## Rollback Plan

If something goes wrong:

```bash
# List recent deployments
wrangler deployments list

# Rollback to previous version
wrangler rollback --version <VERSION_ID>
```

## Troubleshooting Quick Reference

| Issue | Solution |
|-------|----------|
| "Route not found" | Check Cloudflare Dashboard routes configuration |
| Build fails locally | Run `rm -rf .output` then `npm run build` |
| Authentication fails | Run `wrangler logout` then `wrangler login` again |
| Domain doesn't work | Verify nameservers point to Cloudflare |
| SSL certificate error | Wait 15 minutes or check SSL/TLS settings in Cloudflare |

## Support

- [Wrangler Documentation](https://developers.cloudflare.com/workers/cli-wrangler/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Nitro Cloudflare Preset](https://nitro.unjs.io/deploy/providers/cloudflare)
