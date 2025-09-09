<<<<<<< HEAD
# HKK Society — Build a Mosque (Static Site)

## How to run
- Open `index.html` in any browser (double click) or use a local server.

## Update donation details
- In `index.html`, find the `#donate` section.
- Replace the placeholders:
  - Account Name, Account Number, Bank & Branch.
  - Update the online donation link by changing the `href` of the anchor with id `donation-link`.

## Update QR / Barcode
- Replace the `img#barcode` `src` with your official QR image path, for example:
```
<img id="barcode" src="images/your-qr.png" alt="Donation QR" />
```

## Update gallery images
- In the `#gallery` section, replace the four `<img>` `src` URLs with your own images.

## Customize counters
- In `script.js`, update these lines to reflect live values:
```
if(target) target.textContent='PKR 5,000,000';
if(raised) raised.textContent='PKR 850,000';
if(donors) donors.textContent='237';
```

## Brand and colors
- Tweak colors in `styles.css` under the `:root` variables (e.g., `--brand`, `--accent`).

## Deploy
- You can host this static site on GitHub Pages, Netlify, or any static hosting.

=======
# Mosque-Donation-Website
A responsive and modern website designed to support mosque fundraising campaigns through online donations. Built with accessibility, ease of use, and spiritual inspiration in mind, this platform enables donors to contribute securely and stay connected with ongoing mosque development projects.
>>>>>>> ab09f2a2390b48a32e5e12bde531266b5fbaf434
