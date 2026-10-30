# Portfolio hosting

The portfolio is an Astro static site. `npm run build` writes it to `dist/`, and `.github/workflows/deploy-pages.yml` builds and deploys `dist/` from `main`.

Custom domain: `design.isaiahadeleke.com`.

At the DNS provider for `isaiahadeleke.com`, add a CNAME record:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | design | caculuz-cinks.github.io |

In GitHub repository Settings → Pages, use GitHub Actions as the source and set the custom domain above. Enable HTTPS after GitHub finishes its DNS check and certificate setup.

## Future introduction video

The homepage currently uses `public/photos/isaiah-hero.png` in `src/components/HeroSection.astro`, labeled “Isaiah Adeleke.” When the introduction video is ready, replace the portrait card with a playable video. The earlier “Play my story” card is preserved in Git history (commit `5bc0192`).
