import { Layout } from "@/components/Layout";

const Terms = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TermsAndConditions",
    "name": "ABOH Terms of Service",
    "description": "Terms that govern your use of ABOH websites, software, and consultancy services."
  };

  return (
    <Layout
      title="Terms of Service"
      description="Understand the conditions that govern your use of ABOH websites, software, and professional services."
      keywords="terms of service, ABOH terms, service agreement"
      structuredData={structuredData}
      background="none"
      theme="plain"
    >
      <article className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl space-y-6 text-slate-900">
          <h1 className="text-3xl font-semibold">ABOH Studio — Terms of Use</h1>
          <p>Effective Date: 13 November 2025</p>
          <p>
            Welcome to ABOH Studio (“ABOH”, “we”, “us”, or “our”). These Terms of Use (“Terms”) govern your access to and use of our website aboh.studio (the “Website”).
          </p>
          <p>By accessing or using the Website, you agree to these Terms. If you do not agree, stop using the Website immediately.</p>
          <p className="font-semibold">1. About Us</p>
          <p>ABOH Studio</p>
          <p>Registered address: 17a Victoria Street, Douglas, Isle of Man, IM1 2SE</p>
          <p>ABOH Studio is currently in the process of formal company formation. References to “ABOH” refer to the business operating this Website.</p>
          <p className="font-semibold">2. Purpose of the Website</p>
          <p>
            The Website is an informational platform describing our services:
          </p>
          <p>ABOH ships production AI software, conversational applications, and strategy engagements that translate emerging technology into measurable business outcomes.</p>
          <p>The Website does not offer account registration, payments, or online transactions.</p>
          <p>Using this Website does not create any business, professional, advisory, or client relationship with ABOH.</p>
          <p className="font-semibold">3. Contact Form &amp; User Submissions</p>
          <p>The Website includes a contact form where you can submit:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Subject of interest</li>
            <li>Message</li>
          </ul>
          <p>These submissions are processed through EmailJS, which transmits your enquiry to hello@aboh.studio.</p>
          <p>You agree that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You will provide accurate information</li>
            <li>You will not misuse the form (e.g., spam, automation, inappropriate content)</li>
            <li>We may contact you solely for the purpose of responding to your enquiry</li>
          </ul>
          <p>All data handling practices are described separately in our Privacy Policy.</p>
          <p className="font-semibold">4. Intellectual Property</p>
          <p>Except for third-party open-source components used under their respective licences, all content on the Website is owned by or licensed to ABOH, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Text and written content</li>
            <li>Brand elements and logos</li>
            <li>Layout, styling, and structure</li>
            <li>Custom code and design elements</li>
            <li>Visual assets not sourced from open-source libraries</li>
          </ul>
          <p>You may not, without prior written permission:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Copy, reproduce, or republish Website content</li>
            <li>Scrape or harvest data from the Website</li>
            <li>Reverse-engineer or attempt to extract source code</li>
            <li>Use automated systems to interact with the site</li>
            <li>Misrepresent any affiliation with ABOH</li>
          </ul>
          <p className="font-semibold">5. Open-Source &amp; Third-Party Components</p>
          <p>The Website may contain open-source or third-party software components, including UI elements, styling, and code fragments.</p>
          <p>These components are used under the terms of their respective licences.</p>
          <p>Where required, attributions are maintained internally and are available upon request.</p>
          <p>ABOH makes no claim of ownership over such components and provides them “as is” under the original authors’ licensing terms.</p>
          <p className="font-semibold">6. Acceptable Use</p>
          <p>You agree not to use the Website to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Engage in unlawful, fraudulent, or harmful activity</li>
            <li>Attempt to interfere with or disrupt Website functionality</li>
            <li>Introduce malware, viruses, or harmful code</li>
            <li>Collect email addresses or other information for marketing</li>
            <li>Attempt unauthorised access to our systems or data</li>
            <li>Submit false or misleading information</li>
            <li>Use scraping, crawling, automated tooling, or AI agents against our site</li>
          </ul>
          <p>We may suspend or restrict access to any user suspected of violating these Terms.</p>
          <p className="font-semibold">7. Third-Party Services</p>
          <p>The Website may use third-party platforms and integrations, such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>EmailJS (to process contact form submissions)</li>
            <li>Website hosting, analytics, or other supporting tools</li>
          </ul>
          <p>These third parties operate under their own terms and privacy policies.</p>
          <p>ABOH is not responsible for their actions or security practices.</p>
          <p className="font-semibold">8. Disclaimer of Warranties</p>
          <p>The Website is provided “as is” and “as available” without any warranties or guarantees.</p>
          <p>ABOH does not warrant that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The Website will be uninterrupted, secure, or error-free</li>
            <li>Content on the Website is complete, accurate, up-to-date, or reliable</li>
            <li>Use of the Website will produce any business or commercial outcomes</li>
            <li>Contacting us establishes any service engagement or professional advice</li>
          </ul>
          <p>Nothing on the Website constitutes technical, legal, financial, or professional advice.</p>
          <p className="font-semibold">9. Limitation of Liability</p>
          <p>To the fullest extent permitted under Isle of Man law:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>ABOH is not liable for any indirect, incidental, special, or consequential damages</li>
            <li>This includes loss of data, revenue, business opportunities, or profits</li>
            <li>ABOH is not responsible for third-party service failures (e.g., EmailJS outages)</li>
            <li>Your sole remedy for dissatisfaction with the Website is to discontinue use</li>
          </ul>
          <p className="font-semibold">10. Cookies &amp; Analytics</p>
          <p>The Website may use cookies, similar tracking technologies, or analytics tools to improve functionality and monitor website performance.</p>
          <p>Details are provided in our Privacy Policy.</p>
          <p className="font-semibold">11. Links to Other Websites</p>
          <p>The Website may contain links to third-party websites or resources.</p>
          <p>ABOH does not endorse and is not responsible for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The content of third-party sites</li>
            <li>Their availability</li>
            <li>Their security practices</li>
            <li>Any loss or damage resulting from their use</li>
          </ul>
          <p className="font-semibold">12. Modifications to the Website</p>
          <p>We may update, modify, suspend, or discontinue any part of the Website at any time without notice.</p>
          <p>We are under no obligation to maintain or update Website content.</p>
          <p className="font-semibold">13. Changes to These Terms</p>
          <p>We may revise these Terms at any time.</p>
          <p>The most recent version will always be posted on this page with the updated Effective Date.</p>
          <p>Continued use of the Website indicates acceptance of any updated Terms.</p>
          <p className="font-semibold">14. Governing Law &amp; Jurisdiction</p>
          <p>These Terms are governed by the laws of the Isle of Man.</p>
          <p>Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the Isle of Man courts.</p>
          <p className="font-semibold">15. Contact Information</p>
          <p>If you have any questions about these Terms, you can contact us at:</p>
          <p>hello@aboh.studio</p>
        </div>
      </article>
    </Layout>
  );
};

export default Terms;
