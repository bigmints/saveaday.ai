import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const forms={contact:'https://app.saveaday.ai/forms/open?form=bTCdnELseH5QX5lSjyMubQwv0v_jafql',demo:'https://youbot.live/saveaday-frontdesk/forms/open?form=jlfzDQqQIdahp6-062SNhUpKjsDr-PLL'};
for(const [route,url] of Object.entries(forms)) {
  const html=await readFile(`out/${route}/index.html`,'utf8');
  assert.ok(html.includes(`src="${url}"`) && html.includes(`href="${url}"`),`${route}: correct production form`);
  assert.ok(!html.includes('/youbot-enquiries/forms/') && !html.includes('https://app.youbot.live/forms/'),`${route}: no cross-instance intake`);
  assert.match(html,new RegExp(`<link rel="canonical" href="https://www.saveaday.ai/${route}/"`));
  assert.match(html,/href="#enquiry-form"/);
  assert.match(html,/id="enquiry-form"/);
  assert.match(html,/title="(?:Request a demo|Contact us) — Saveaday"/);
  assert.match(html,/Form not loading\?/);
  assert.match(html,/href="\/privacy\/"/);
  assert.match(html,/href="\/contact\/"/);
  assert.match(html,/href="\/demo\/"/);
  console.log(`${route}: form destination, metadata, navigation, mobile shortcut and fallback verified`);
}
const sitemap=await readFile('out/sitemap.xml','utf8');
for(const route of Object.keys(forms))assert.ok(sitemap.includes(`https://www.saveaday.ai/${route}/`));
