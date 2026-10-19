# Portfolio hosting

The portfolio exports static files to `out/` by default. The deployment workflow uses the isolated `.next-pages/` export directory and deploys from `main` through `.github/workflows/deploy-pages.yml`.

Custom domain: `design.isaiahadeleke.com`.

At the DNS provider for `isaiahadeleke.com`, add a CNAME record:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | design | caculuz-cinks.github.io |

In GitHub repository Settings → Pages, use GitHub Actions as the source and set the custom domain above. Enable HTTPS after GitHub finishes its DNS check and certificate setup.

## Future introduction video

The homepage currently uses `public/photos/isaiah-hero.png` in `components/HeroSection.tsx`, labeled “Isaiah Adeleke.” When the introduction video is ready, replace the portrait card with a playable video. The earlier “Play my story” card is preserved in Git history (commit `5bc0192`).
