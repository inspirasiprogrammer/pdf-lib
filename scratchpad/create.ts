import { PDFDocument, StandardFonts } from 'src/index';

// import { default as opentype } from 'opentype.js';

// import fs from 'fs';
// import { cmyk, degrees, PDFDocument, rgb, StandardFonts } from 'src/index';

// const main = async () => {
//   console.time('Scratchpad');

//   const ubuntuFontBytes = fs.readFileSync('assets/fonts/ubuntu/Ubuntu-R.ttf');

//   const catRidingUnicornBytes = fs.readFileSync(
//     'assets/images/cat_riding_unicorn.jpg',
//   );
//   const greyscaleBirdBytes = fs.readFileSync(
//     'assets/images/greyscale_bird.png',
//   );
//   const minionsBananaAlphaBytes = fs.readFileSync(
//     'assets/images/minions_banana_alpha.png',
//   );
//   const minionsBananaNoAlphaBytes = fs.readFileSync(
//     'assets/images/minions_banana_no_alpha.png',
//   );

//   const pdfDoc = PDFDocument.create();

//   const page = pdfDoc.insertPage(0);

//   const timesRomanItalicFont = pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
//   const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica);
//   const ubuntuFont = pdfDoc.embedFont(ubuntuFontBytes);

//   const catRidingUnicornJpg = pdfDoc.embedJpg(catRidingUnicornBytes);
//   const greyscaleBirdPng = pdfDoc.embedPng(greyscaleBirdBytes);
//   const minionsBananaAlphaPng = pdfDoc.embedPng(minionsBananaAlphaBytes);
//   const minionsBananaNoAlphaPng = pdfDoc.embedPng(minionsBananaNoAlphaBytes);

//   page.moveTo(25, 25);
//   page.drawImage(greyscaleBirdPng, greyscaleBirdPng.scale(0.75));
//   page.moveTo(25, 25);
//   page.drawImage(minionsBananaAlphaPng, minionsBananaAlphaPng.scale(0.25));
//   page.moveTo(25, 325);
//   page.drawImage(minionsBananaNoAlphaPng, minionsBananaNoAlphaPng.scale(0.25));
//   page.drawImage(catRidingUnicornJpg, {
//     ...catRidingUnicornJpg.scale(0.25),
//     x: 25,
//     y: 450,
//     rotate: degrees(5),
//     xSkew: degrees(15),
//     ySkew: degrees(15),
//   });

//   page.setFontSize(24);
//   page.setFont(helveticaFont);
//   page.moveTo(100, 100);
//   page.drawText('Hello World and stuff!');
//   page.setFont(ubuntuFont);
//   page.moveTo(100, 300);
//   page.drawText('Ubuntu - Hello World and stuff!');

//   page.setFontSize(50);
//   page.moveTo(100, 100);
//   page.drawText('Qux Baz!!!\nFoo\tBar\b\v!!!', {
//     color: rgb(1, 0, 0),
//     font: timesRomanItalicFont,
//     size: 100,
//     x: 150,
//     y: 150,
//     rotate: degrees(45),
//     xSkew: degrees(-30),
//     ySkew: degrees(-30),
//     lineHeight: 100,
//   });

//   const page2 = pdfDoc.addPage();
//   page2.moveTo(50, 50);
//   page2.drawRectangle();
//   page2.drawRectangle({
//     x: 50,
//     y: 200,
//     borderColor: cmyk(0, 1, 0, 0),
//     borderWidth: 5,
//   });
//   page2.drawRectangle({
//     x: 100,
//     y: 400,
//     color: cmyk(1, 0, 0, 0),
//     borderColor: cmyk(0, 1, 0, 0),
//     borderWidth: 5,
//     width: 300,
//     height: 200,
//     rotate: degrees(15),
//     xSkew: degrees(15),
//     ySkew: degrees(15),
//   });

//   const page3 = pdfDoc.addPage();
//   page3.moveTo(100, 100);
//   page3.drawEllipse();
//   page3.drawEllipse({
//     x: 250,
//     y: 300,
//     color: cmyk(1, 0, 0, 0),
//     borderColor: cmyk(0, 1, 0, 0),
//     borderWidth: 5,
//     xScale: 200,
//     yScale: 50,
//   });

//   /*******************/

//   const pdfBytes2 = fs.readFileSync('./assets/pdfs/F1040V_tax_form.pdf');

//   const donorPdfDoc = PDFDocument.load(pdfBytes2);
//   const donorPage = donorPdfDoc.getPages()[0];
//   pdfDoc.addPage(donorPage);

//   const buffer = await pdfDoc.save();
//   console.timeEnd('Scratchpad');

//   fs.writeFileSync('./out.pdf', buffer);
//   console.log('File written to ./out.pdf');
// };

// main();

import fs from 'fs';
import PDFFont from './api/PDFFont';

// const readFont = (font: string) => fs.readFileSync(`assets/fonts/${font}`);

// const readImage = (image: string) => fs.readFileSync(`assets/images/${image}`);

// const readPdf = (pdf: string) => fs.readFileSync(`assets/pdfs/${pdf}`);

// const assets = {
//   fonts: {
//     ttf: {
//       ubuntu_r: readFont('ubuntu/Ubuntu-R.ttf'),
//       bio_rhyme_r: readFont('bio_rhyme/BioRhymeExpanded-Regular.ttf'),
//       press_start_2p_r: readFont('press_start_2p/PressStart2P-Regular.ttf'),
//       indie_flower_r: readFont('indie_flower/IndieFlower.ttf'),
//       great_vibes_r: readFont('great_vibes/GreatVibes-Regular.ttf'),
//     },
//     otf: {
//       fantasque_sans_mono_bi: readFont(
//         'fantasque/OTF/FantasqueSansMono-BoldItalic.otf',
//       ),
//       apple_storm_r: readFont('apple_storm/AppleStormCBo.otf'),
//       hussar_3d_r: readFont('hussar_3d/Hussar3DFour.otf'),
//       source_hans_jp: readFont('source_hans_jp/SourceHanSerifJP-Regular.otf'),
//     },
//   },
//   images: {
//     jpg: {
//       cat_riding_unicorn: readImage('cat_riding_unicorn.jpg'),
//       minions_laughing: readImage('minions_laughing.jpg'),
//     },
//     png: {
//       greyscale_bird: readImage('greyscale_bird.png'),
//       minions_banana_alpha: readImage('minions_banana_alpha.png'),
//       minions_banana_no_alpha: readImage('minions_banana_no_alpha.png'),
//       small_mario: readImage('small_mario.png'),
//     },
//   },
//   pdfs: {
//     normal: readPdf('normal.pdf'),
//     with_update_sections: readPdf('with_update_sections.pdf'),
//     linearized_with_object_streams: readPdf(
//       'linearized_with_object_streams.pdf',
//     ),
//     with_large_page_count: readPdf('with_large_page_count.pdf'),
//     with_missing_endstream_eol_and_polluted_ctm: readPdf(
//       'with_missing_endstream_eol_and_polluted_ctm.pdf',
//     ),
//     with_newline_whitespace_in_indirect_object_numbers: readPdf(
//       'with_newline_whitespace_in_indirect_object_numbers.pdf',
//     ),
//     with_comments: readPdf('with_comments.pdf'),
//   },
// };

// prettier-ignore
const winAnsiCodePoints = [
  0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027, 0x0028, 
  0x0029, 0x002a, 0x002b, 0x002c, 0x002d, 0x002e, 0x002f, 0x0030, 0x0031, 
  0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037, 0x0038, 0x0039, 0x003a, 
  0x003b, 0x003c, 0x003d, 0x003e, 0x003f, 0x0040, 0x0041, 0x0042, 0x0043, 
  0x0044, 0x0045, 0x0046, 0x0047, 0x0048, 0x0049, 0x004a, 0x004b, 0x004c, 
  0x004d, 0x004e, 0x004f, 0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055, 
  0x0056, 0x0057, 0x0058, 0x0059, 0x005a, 0x005b, 0x005c, 0x005d, 0x005e, 
  0x005f, 0x0060, 0x0061, 0x0062, 0x0063, 0x0064, 0x0065, 0x0066, 0x0067, 
  0x0068, 0x0069, 0x006a, 0x006b, 0x006c, 0x006d, 0x006e, 0x006f, 0x0070, 
  0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076, 0x0077, 0x0078, 0x0079, 
  0x007a, 0x007b, 0x007c, 0x007d, 0x007e, 0x00a0, 0x00a1, 0x00a2, 0x00a3, 
  0x00a4, 0x00a5, 0x00a6, 0x00a7, 0x00a8, 0x00a9, 0x00aa, 0x00ab, 0x00ac, 
  0x00ad, 0x00ae, 0x00af, 0x00b0, 0x00b1, 0x00b2, 0x00b3, 0x00b4, 0x00b5, 
  0x00b6, 0x00b7, 0x00b8, 0x00b9, 0x00ba, 0x00bb, 0x00bc, 0x00bd, 0x00be, 
  0x00bf, 0x00c0, 0x00c1, 0x00c2, 0x00c3, 0x00c4, 0x00c5, 0x00c6, 0x00c7, 
  0x00c8, 0x00c9, 0x00ca, 0x00cb, 0x00cc, 0x00cd, 0x00ce, 0x00cf, 0x00d0, 
  0x00d1, 0x00d2, 0x00d3, 0x00d4, 0x00d5, 0x00d6, 0x00d7, 0x00d8, 0x00d9, 
  0x00da, 0x00db, 0x00dc, 0x00dd, 0x00de, 0x00df, 0x00e0, 0x00e1, 0x00e2, 
  0x00e3, 0x00e4, 0x00e5, 0x00e6, 0x00e7, 0x00e8, 0x00e9, 0x00ea, 0x00eb, 
  0x00ec, 0x00ed, 0x00ee, 0x00ef, 0x00f0, 0x00f1, 0x00f2, 0x00f3, 0x00f4, 
  0x00f5, 0x00f6, 0x00f7, 0x00f8, 0x00f9, 0x00fa, 0x00fb, 0x00fc, 0x00fd, 
  0x00fe, 0x00ff, 0x0152, 0x0153, 0x0160, 0x0161, 0x0178, 0x017d, 0x017e, 
  0x0192, 0x02c6, 0x02dc, 0x2013, 0x2014, 0x2018, 0x2019, 0x201a, 0x201c, 
  0x201d, 0x201e, 0x2020, 0x2021, 0x2022, 0x2026, 0x2030, 0x2039, 0x203a, 
  0x20ac, 0x2122,
];

const winAnsiString = String.fromCodePoint(...winAnsiCodePoints)
  .split('')
  .join(' ');

// prettier-ignore
const zapfDingbatsCodePoints = [
  0x0020, 0x00a0, 0x2192, 0x2194, 0x2195, 0x2460, 0x2461, 0x2462, 0x2463,
  0x2464, 0x2465, 0x2466, 0x2467, 0x2468, 0x2469, 0x25a0, 0x25b2, 0x25bc,
  0x25c6, 0x25cf, 0x25d7, 0x2605, 0x260e, 0x261b, 0x261e, 0x2660, 0x2663,
  0x2665, 0x2666, 0x2701, 0x2702, 0x2703, 0x2704, 0x2706, 0x2707, 0x2708,
  0x2709, 0x270c, 0x270d, 0x270e, 0x270f, 0x2710, 0x2711, 0x2712, 0x2713,
  0x2714, 0x2715, 0x2716, 0x2717, 0x2718, 0x2719, 0x271a, 0x271b, 0x271c,
  0x271d, 0x271e, 0x271f, 0x2720, 0x2721, 0x2722, 0x2723, 0x2724, 0x2725,
  0x2726, 0x2727, 0x2729, 0x272a, 0x272b, 0x272c, 0x272d, 0x272e, 0x272f,
  0x2730, 0x2731, 0x2732, 0x2733, 0x2734, 0x2735, 0x2736, 0x2737, 0x2738,
  0x2739, 0x273a, 0x273b, 0x273c, 0x273d, 0x273e, 0x273f, 0x2740, 0x2741,
  0x2742, 0x2743, 0x2744, 0x2745, 0x2746, 0x2747, 0x2748, 0x2749, 0x274a,
  0x274b, 0x274d, 0x274f, 0x2750, 0x2751, 0x2752, 0x2756, 0x2758, 0x2759,
  0x275a, 0x275b, 0x275c, 0x275d, 0x275e, 0x2761, 0x2762, 0x2763, 0x2764,
  0x2765, 0x2766, 0x2767, 0x2776, 0x2777, 0x2778, 0x2779, 0x277a, 0x277b,
  0x277c, 0x277d, 0x277e, 0x277f, 0x2780, 0x2781, 0x2782, 0x2783, 0x2784,
  0x2785, 0x2786, 0x2787, 0x2788, 0x2789, 0x278a, 0x278b, 0x278c, 0x278d,
  0x278e, 0x278f, 0x2790, 0x2791, 0x2792, 0x2793, 0x2794, 0x2798, 0x2799,
  0x279a, 0x279b, 0x279c, 0x279d, 0x279e, 0x279f, 0x27a0, 0x27a1, 0x27a2,
  0x27a3, 0x27a4, 0x27a5, 0x27a6, 0x27a7, 0x27a8, 0x27a9, 0x27aa, 0x27ab,
  0x27ac, 0x27ad, 0x27ae, 0x27af, 0x27b1, 0x27b2, 0x27b3, 0x27b4, 0x27b5,
  0x27b6, 0x27b7, 0x27b8, 0x27b9, 0x27ba, 0x27bb, 0x27bc, 0x27bd, 0x27be,
  0xf8d7, 0xf8d8, 0xf8d9, 0xf8da, 0xf8db, 0xf8dc, 0xf8dd, 0xf8de, 0xf8df,
  0xf8e0, 0xf8e1, 0xf8e2, 0xf8e3, 0xf8e4,
];

const zapfDingbatsString = String.fromCodePoint(...zapfDingbatsCodePoints)
  .split('')
  .join(' ');

// prettier-ignore
const symbolCodePoints = [
  0x0020, 0x0021, 0x0023, 0x0025, 0x0026, 0x0028, 0x0029, 0x002b, 0x002c,
  0x002e, 0x002f, 0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036,
  0x0037, 0x0038, 0x0039, 0x003a, 0x003b, 0x003c, 0x003d, 0x003e, 0x003f,
  0x005b, 0x005d, 0x005f, 0x007b, 0x007c, 0x007d, 0x00a0, 0x00ac, 0x00b0,
  0x00b1, 0x00b5, 0x00d7, 0x00f7, 0x0192, 0x0391, 0x0392, 0x0393, 0x0394,
  0x0395, 0x0396, 0x0397, 0x0398, 0x0399, 0x039a, 0x039b, 0x039c, 0x039d,
  0x039e, 0x039f, 0x03a0, 0x03a1, 0x03a3, 0x03a4, 0x03a5, 0x03a6, 0x03a7,
  0x03a8, 0x03a9, 0x03b1, 0x03b2, 0x03b3, 0x03b4, 0x03b5, 0x03b6, 0x03b7,
  0x03b8, 0x03b9, 0x03ba, 0x03bb, 0x03bc, 0x03bd, 0x03be, 0x03bf, 0x03c0,
  0x03c1, 0x03c2, 0x03c3, 0x03c4, 0x03c5, 0x03c6, 0x03c7, 0x03c8, 0x03c9,
  0x03d1, 0x03d2, 0x03d5, 0x03d6, 0x2022, 0x2026, 0x2032, 0x2033, 0x2044,
  0x20ac, 0x2111, 0x2118, 0x211c, 0x2126, 0x2135, 0x2190, 0x2191, 0x2192,
  0x2193, 0x2194, 0x21b5, 0x21d0, 0x21d1, 0x21d2, 0x21d3, 0x21d4, 0x2200,
  0x2202, 0x2203, 0x2205, 0x2206, 0x2207, 0x2208, 0x2209, 0x220b, 0x220f,
  0x2211, 0x2212, 0x2215, 0x2217, 0x221a, 0x221d, 0x221e, 0x2220, 0x2227,
  0x2228, 0x2229, 0x222a, 0x222b, 0x2234, 0x223c, 0x2245, 0x2248, 0x2260,
  0x2261, 0x2264, 0x2265, 0x2282, 0x2283, 0x2284, 0x2286, 0x2287, 0x2295,
  0x2297, 0x22a5, 0x22c5, 0x2320, 0x2321, 0x2329, 0x232a, 0x25ca, 0x2660,
  0x2663, 0x2665, 0x2666, 0xf6d9, 0xf6da, 0xf6db, 0xf8e5, 0xf8e6, 0xf8e7,
  0xf8e8, 0xf8e9, 0xf8ea, 0xf8eb, 0xf8ec, 0xf8ed, 0xf8ee, 0xf8ef, 0xf8f0,
  0xf8f1, 0xf8f2, 0xf8f3, 0xf8f4, 0xf8f5, 0xf8f6, 0xf8f7, 0xf8f8, 0xf8f9,
  0xf8fa, 0xf8fb, 0xf8fc, 0xf8fd, 0xf8fe,
];

const symbolString = String.fromCodePoint(...symbolCodePoints)
  .split('')
  .join(' ');

const addPageWithFonts = (
  pdfDoc: PDFDocument,
  text: string,
  fontSize: number,
  gapAmt: number,
  fontNames: StandardFonts[],
) => {
  const page = pdfDoc.addPage([650, 700]);

  page.moveTo(0, 675);
  fontNames.forEach((fontName) => {
    const font = pdfDoc.embedFont(fontName);
    const lines = breakTextIntoLines(text, fontSize, font, 600);

    page.drawText(fontName, {
      font,
      size: fontSize,
      x: 650 / 2 - font.widthOfTextAtSize(fontName, fontSize) / 2,
    });
    page.moveTo(0, page.getY() - font.heightAtSize(fontSize) - 10);
    page.drawText(lines.join('\n'), {
      font,
      size: fontSize,
      x: 25,
      lineHeight: font.heightAtSize(fontSize) + 10,
    });

    page.moveDown(
      (font.heightAtSize(fontSize) + 10) * (lines.length - 1 + gapAmt),
    );
  });
};

// Primitive line break algorithm
const breakTextIntoLines = (
  text: string,
  size: number,
  font: PDFFont,
  maxWidth: number,
) => {
  const lines: string[] = [];
  let textIdx = 0;
  while (textIdx < text.length) {
    let line = '';
    while (textIdx < text.length) {
      if (text.charAt(textIdx) === '\n') {
        lines.push(line);
        textIdx += 1;
        line = '';
        continue;
      }
      const newLine = line + text.charAt(textIdx);
      if (font.widthOfTextAtSize(newLine, size) > maxWidth) break;
      line = newLine;
      textIdx += 1;
    }
    lines.push(line);
  }
  return lines;
};

(async () => {
  const pdfDoc = PDFDocument.create();

  const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const title = 'Standard 14 Fonts Demo';
  const description = `
    The PDF specification requires that PDF readers provide 14 standard fonts. 
    PDF documents may use these fonts without having to embed the fonts 
    themselves in the document. The fonts are as follows:
      • Times Roman (serif) in regular, bold, italic, and bold italic variants.
      • Helvetica (sans-serif) in regular, bold, oblique, and bold oblique variants.
      • Courier (monospace serif) in regular, bold, oblique, and bold oblique variants.
      • ZapfDingbats (symbolic) in regular variant.
      • Symbol (symbolic) in regular variant.
    The Times Roman, Helvetica, and Courier fonts use WinAnsi encoding
    (Windows-1252). ZapfDingbats and Symbol each use their own special 
    encodings. 
    Note that none of these fonts support anything near the entire Unicode 
    character set. The WinAnsi fonts include most glyphs in the Latin alphabet.
    The ZapfDingbat font includes an odd assortment of glyphs that don't below 
    to any particular language or region. And the Symbol font includes 
    mathematical symbols and glyphs for the greek alphabet.
    The following pages contain examples of each of the standard 14 fonts. Each 
    glyph supported by a given font's encoding is rendered to the page under a
    header naming the font in use.`;

  const descriptionLines = breakTextIntoLines(
    description,
    16,
    helveticaFont,
    600,
  );

  const titlePage = pdfDoc.addPage([650, 700]);
  titlePage.drawText(title, {
    font: helveticaBoldFont,
    size: 35,
    y: 700 - 100,
    x: 650 / 2 - helveticaBoldFont.widthOfTextAtSize(title, 35) / 2,
  });
  titlePage.drawText(descriptionLines.join('\n'), {
    font: helveticaFont,
    size: 16,
    y: 525,
    x: 25,
  });

  // Times Roman
  addPageWithFonts(pdfDoc, winAnsiString, 18, 0.25, [
    StandardFonts.TimesRoman,
    StandardFonts.TimesRomanBold,
    StandardFonts.TimesRomanItalic,
    StandardFonts.TimesRomanBoldItalic,
  ]);

  // Helvetica
  addPageWithFonts(pdfDoc, winAnsiString, 16.75, 0.4, [
    StandardFonts.Helvetica,
    StandardFonts.HelveticaBold,
    StandardFonts.HelveticaOblique,
    StandardFonts.HelveticaBoldOblique,
  ]);

  // Courier
  addPageWithFonts(pdfDoc, winAnsiString, 14.25, 0.75, [
    StandardFonts.Courier,
    StandardFonts.CourierBold,
    StandardFonts.CourierOblique,
    StandardFonts.CourierBoldOblique,
  ]);

  // ZapfDingbats
  const zapfDingbatsFont = pdfDoc.embedFont(StandardFonts.ZapfDingbats);
  const zapfDingbatsFontSize = 20;
  const zapfDingbatsLines = breakTextIntoLines(
    zapfDingbatsString,
    zapfDingbatsFontSize,
    zapfDingbatsFont,
    600,
  );

  const page = pdfDoc.addPage([650, 700]);
  page.moveTo(0, 700);

  page.moveDown(100);
  page.drawText('ZapfDingbats', {
    font: helveticaFont,
    size: zapfDingbatsFontSize,
    x:
      650 / 2 -
      helveticaFont.widthOfTextAtSize('ZapfDingbats', zapfDingbatsFontSize) / 2,
  });
  page.moveDown(zapfDingbatsFont.heightAtSize(zapfDingbatsFontSize) + 10);
  page.drawText(zapfDingbatsLines.join('\n'), {
    font: zapfDingbatsFont,
    size: zapfDingbatsFontSize,
    x: 25,
    lineHeight: zapfDingbatsFont.heightAtSize(zapfDingbatsFontSize) + 10,
  });

  // Symbol
  const symbolFont = pdfDoc.embedFont(StandardFonts.Symbol);
  const symbolFontSize = 20;
  const symbolLines = breakTextIntoLines(
    symbolString,
    symbolFontSize,
    symbolFont,
    600,
  );

  page.moveDown(275);
  page.drawText('Symbol', {
    font: helveticaFont,
    size: symbolFontSize,
    x: 650 / 2 - helveticaFont.widthOfTextAtSize('Symbol', symbolFontSize) / 2,
  });
  page.moveDown(symbolFont.heightAtSize(symbolFontSize) + 10);
  page.drawText(symbolLines.join('\n'), {
    font: symbolFont,
    size: symbolFontSize,
    x: 25,
    lineHeight: symbolFont.heightAtSize(symbolFontSize) + 10,
  });

  const buffer = await pdfDoc.save();

  fs.writeFileSync('./out.pdf', buffer);
  console.log('File written to ./out.pdf');
})();
