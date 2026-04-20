# Google Search Console Setup Guide for Delta Infosoft

## Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account (use company email if possible)

## Step 2: Add Your Property

### Option A: Domain Property (Recommended)
1. Click "Add Property"
2. Select "Domain" property type
3. Enter: `deltainfosoft.com` (without https://)
4. Click "Continue"

### Option B: URL Prefix Property
1. Click "Add Property"
2. Select "URL prefix"
3. Enter: `https://deltainfosoft.com`
4. Click "Continue"

## Step 3: Verify Ownership

### Method 1: DNS Verification (Recommended for Domain Property)
1. Google will provide a TXT record
2. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
3. Go to DNS settings
4. Add new TXT record:
   - Type: TXT
   - Name: @ (or leave blank)
   - Value: [Copy from Google Search Console]
   - TTL: 3600 (or default)
5. Save changes
6. Return to Search Console and click "Verify"
7. **Note**: DNS changes may take up to 48 hours

### Method 2: HTML File Upload
1. Download the HTML verification file from Google
2. Upload to: `public/` folder in your Next.js project
3. Deploy your website
4. Verify the file is accessible at: `https://deltainfosoft.com/google[code].html`
5. Return to Search Console and click "Verify"

### Method 3: HTML Tag (Quick Method)
1. Copy the meta tag provided by Google
2. Add to `src/app/layout.tsx` in the `<head>` section:
```tsx
<head>
  <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
  {/* ... other head content */}
</head>
```
3. Deploy your website
4. Return to Search Console and click "Verify"

## Step 4: Submit Sitemap

1. After verification, go to "Sitemaps" in the left sidebar
2. Enter sitemap URL: `sitemap.xml`
3. Click "Submit"
4. Your sitemap will be processed within a few hours

### Additional Sitemaps (if needed)
- Main sitemap: `sitemap.xml`
- You can also submit individual sitemaps if you create them later

## Step 5: Configure Settings

### 1. Set Preferred Domain (if using URL prefix)
- Go to Settings
- Under "Property settings"
- Set preferred version (with or without www)

### 2. Set Geographic Target
- Go to Settings
- Under "Geographic target"
- Select "India"

### 3. Set Up Users and Permissions
- Go to Settings → Users and permissions
- Add team members with appropriate access levels:
  - Owner: Full control
  - Full: Can view and modify
  - Restricted: Can view only

## Step 6: Monitor Performance

### Weekly Checks
1. **Performance Report**
   - Go to "Performance" in left sidebar
   - Check:
     - Total clicks
     - Total impressions
     - Average CTR
     - Average position
   - Filter by:
     - Last 7 days vs previous period
     - Queries (search terms)
     - Pages
     - Countries
     - Devices

2. **Coverage Report**
   - Go to "Coverage" (or "Pages" in new interface)
   - Check for:
     - Valid pages
     - Errors
     - Warnings
     - Excluded pages
   - Fix any errors immediately

3. **URL Inspection**
   - Test important pages:
     - Homepage: `https://deltainfosoft.com`
     - ERP page: `https://deltainfosoft.com/erp-software-ahmedabad`
     - CRM page: `https://deltainfosoft.com/crm-software-ahmedabad`
     - Zoho page: `https://deltainfosoft.com/zoho-crm-implementation-ahmedabad`
   - Request indexing for new pages

## Step 7: Set Up Email Notifications

1. Go to Settings → Email notifications
2. Enable notifications for:
   - Site issues
   - Manual actions
   - Security issues
   - New messages

## Important URLs to Monitor

### Priority Pages (Check Weekly)
- Homepage: `/`
- ERP Software: `/erp-software-ahmedabad`
- CRM Software: `/crm-software-ahmedabad`
- Zoho CRM: `/zoho-crm-implementation-ahmedabad`
- Contact: `/contactus`
- About: `/company/aboutus`

### Target Keywords to Track
1. **Primary Keywords**:
   - software development company ahmedabad
   - erp software company ahmedabad
   - crm software company ahmedabad
   - zoho crm implementation ahmedabad

2. **Secondary Keywords**:
   - custom software development ahmedabad
   - business automation software ahmedabad
   - manufacturing erp software
   - sales crm software gujarat
   - zoho partner ahmedabad

3. **Long-tail Keywords**:
   - best erp software for manufacturing in ahmedabad
   - affordable crm software for small business ahmedabad
   - zoho crm consultant in gujarat
   - custom erp development company ahmedabad

## Troubleshooting Common Issues

### Issue 1: Sitemap Not Found
- Verify sitemap is accessible: `https://deltainfosoft.com/sitemap.xml`
- Check for errors in sitemap format
- Ensure sitemap is not blocked by robots.txt

### Issue 2: Pages Not Indexed
- Use URL Inspection tool
- Check for:
  - Robots.txt blocking
  - Noindex tags
  - Canonical issues
  - Server errors (404, 500)
- Request indexing manually

### Issue 3: Mobile Usability Issues
- Go to "Mobile Usability" report
- Fix issues like:
  - Text too small
  - Clickable elements too close
  - Content wider than screen
  - Viewport not set

### Issue 4: Core Web Vitals Issues
- Go to "Core Web Vitals" report
- Check:
  - LCP (Largest Contentful Paint) - should be < 2.5s
  - FID (First Input Delay) - should be < 100ms
  - CLS (Cumulative Layout Shift) - should be < 0.1
- Use PageSpeed Insights for detailed recommendations

## Monthly Tasks

### 1. Performance Analysis
- Export performance data
- Compare month-over-month growth
- Identify top-performing pages
- Find opportunities for improvement

### 2. Keyword Research
- Check "Queries" report
- Find new keyword opportunities
- Identify low-hanging fruit (high impressions, low clicks)
- Optimize pages for these keywords

### 3. Backlink Monitoring
- Go to "Links" report
- Check:
  - Top linking sites
  - Top linked pages
  - Internal links
- Disavow spammy backlinks if necessary

### 4. Content Optimization
- Find pages with:
  - High impressions but low CTR → Improve title/description
  - High CTR but low position → Add more content
  - Low impressions → Need more internal links

## Advanced Features

### 1. Rich Results Testing
- Test structured data: https://search.google.com/test/rich-results
- Verify schema markup is working correctly
- Check for:
  - LocalBusiness schema
  - Organization schema
  - BreadcrumbList schema

### 2. URL Parameters
- Configure URL parameters if you have query strings
- Tell Google how to handle parameters

### 3. International Targeting
- If you expand to other countries
- Use hreflang tags
- Set up separate properties for different regions

### 4. AMP (if applicable)
- If you implement AMP pages
- Monitor AMP-specific issues

## Integration with Other Tools

### Google Analytics
- Link Search Console with Google Analytics
- Get deeper insights into user behavior
- Track conversions from organic search

### Google Tag Manager
- Use GTM for tracking
- Set up event tracking
- Monitor user interactions

## Best Practices

1. **Check Search Console Weekly**
   - Every Monday morning
   - Review performance
   - Check for errors
   - Monitor new queries

2. **Act on Insights**
   - Don't just collect data
   - Use insights to improve content
   - Fix technical issues promptly
   - Optimize underperforming pages

3. **Document Changes**
   - Keep a log of:
     - Content updates
     - Technical changes
     - Algorithm updates
     - Ranking changes
   - Correlate changes with performance

4. **Stay Updated**
   - Follow Google Search Central blog
   - Watch for algorithm updates
   - Adapt to new features
   - Implement best practices

## Quick Reference Checklist

### Daily (Optional)
- [ ] Check for critical errors

### Weekly (Required)
- [ ] Review performance report
- [ ] Check coverage/pages report
- [ ] Monitor top queries
- [ ] Check for manual actions

### Monthly (Required)
- [ ] Export performance data
- [ ] Analyze keyword trends
- [ ] Review backlink profile
- [ ] Optimize low-performing pages
- [ ] Update content based on insights

### Quarterly
- [ ] Comprehensive SEO audit
- [ ] Competitor analysis
- [ ] Content gap analysis
- [ ] Technical SEO review

## Support Resources

- **Google Search Central**: https://developers.google.com/search
- **Search Console Help**: https://support.google.com/webmasters
- **Community Forum**: https://support.google.com/webmasters/community
- **YouTube Channel**: Google Search Central

## Contact for Help

If you encounter issues:
1. Check Google Search Console Help Center
2. Search in Community Forum
3. Contact your web developer
4. Consider hiring an SEO consultant

---

**Remember**: SEO is a long-term strategy. Results typically take 3-6 months to show significant improvement. Be patient and consistent with your efforts.

**Last Updated**: February 3, 2026
