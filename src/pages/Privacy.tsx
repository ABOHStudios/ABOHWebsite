import { Layout } from "@/components/Layout";

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "ABOH Privacy Policy",
    "description": "How ABOH collects, uses, and protects personal information across its AI services."
  };

  return (
    <Layout
      title="Privacy Policy"
      description="Learn how ABOH collects, uses, and safeguards personal information across our AI software, applications, and consultancy engagements."
      keywords="privacy policy, data protection, personal information, ABOH privacy"
      structuredData={structuredData}
      background="none"
      theme="plain"
    >
      <article className="px-4 py-16 md:py-24 text-slate-700">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold text-slate-900">ABOH Studio — Privacy Policy</h1>
          <p>Effective Date: 13 November 2025</p>
          <p>This Privacy Policy explains how ABOH Studio (“ABOH”, “we”, “us”, or “our”) collects, uses, stores, and protects your personal data when you visit aboh.studio (the “Website”) or contact us through the Website.</p>
          <p>We are committed to protecting your privacy and handling your personal data in accordance with applicable data protection laws in the Isle of Man and, where relevant, UK and EU data protection law (including UK/EU GDPR equivalents).</p>
          <p className="font-semibold text-slate-900">1. Data Controller</p>
          <p>For the purposes of this Privacy Policy, the data controller is:</p>
          <p>ABOH Studio</p>
          <p>17a Victoria Street</p>
          <p>Douglas</p>
          <p>Isle of Man</p>
          <p>IM1 2SE</p>
          <p>You can contact us at: hello@aboh.studio</p>
          <p className="font-semibold text-slate-900">2. Personal Data We Collect</p>
          <p className="font-semibold text-slate-900">2.1 Data You Provide Directly</p>
          <p>When you use the contact form on the Website, we collect the following information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Subject of interest</li>
            <li>Message content</li>
          </ul>
          <p>You provide this information voluntarily when you submit an enquiry.</p>
          <p className="font-semibold text-slate-900">2.2 Data Collected Automatically (Analytics &amp; Technical Data)</p>
          <p>We may also collect certain technical and usage information when you visit the Website, such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Referring pages and pages visited</li>
            <li>Date and time of access</li>
            <li>General interaction data (e.g., page views, time on site)</li>
          </ul>
          <p>This information may be collected via server logs or analytics tools and is generally used in an aggregated form.</p>
          <p className="font-semibold text-slate-900">3. How We Use Your Personal Data</p>
          <p>We use your personal data for the following purposes:</p>
          <p className="font-semibold text-slate-900">Responding to enquiries</p>
          <p>To read, process, and reply to messages you send via the contact form.</p>
          <p className="font-semibold text-slate-900">Improving the Website and services</p>
          <p>To analyse how visitors use the Website so we can improve content, layout, and performance.</p>
          <p className="font-semibold text-slate-900">Understanding interest in our services</p>
          <p>To better understand what types of services and topics people are contacting us about (e.g., AI software, conversational applications, strategy engagements).</p>
          <p className="font-semibold text-slate-900">Security and abuse prevention</p>
          <p>To monitor for suspicious activity, prevent misuse of the contact form, and maintain the security and integrity of the Website.</p>
          <p className="font-semibold text-slate-900">Future marketing communications (if and when used)</p>
          <p>If we decide to send marketing emails in future, we will only do so where we have a valid lawful basis (such as your consent or our legitimate interests, where appropriate) and always with an option to opt out.</p>
          <p>We will not sell your personal data.</p>
          <p className="font-semibold text-slate-900">4. Legal Bases for Processing</p>
          <p>We process your personal data under the following legal bases:</p>
          <p className="font-semibold text-slate-900">Legitimate interests</p>
          <p>To respond to your enquiries.</p>
          <p>To operate, maintain, and improve the Website.</p>
          <p>To monitor for misuse or security issues.</p>
          <p className="font-semibold text-slate-900">Consent</p>
          <p>If and when we send you marketing communications that are based on your explicit consent (e.g., if you sign up to receive updates from us in the future). You can withdraw your consent at any time by contacting us or using an unsubscribe option if provided.</p>
          <p className="font-semibold text-slate-900">5. How We Store and Process Your Data</p>
          <p className="font-semibold text-slate-900">5.1 Contact Form Processing</p>
          <p>When you submit a contact form:</p>
          <p>Your submission is processed via EmailJS, which acts as a service provider (processor) to relay your message.</p>
          <p>The message is then delivered to our internal email address: hello@aboh.studio (hosted via Google Workspace).</p>
          <p>Your data is stored:</p>
          <p>In EmailJS systems for processing/delivery as per their retention practices.</p>
          <p>In our email inbox (Google Workspace) as a record of your communication with us.</p>
          <p className="font-semibold text-slate-900">5.2 Data Retention</p>
          <p>We retain contact form submissions:</p>
          <p>Indefinitely, or</p>
          <p>Until they are no longer needed for the purposes listed in this Privacy Policy, or</p>
          <p>Until you request deletion (see Section 9 – Your Rights).</p>
          <p>We may also retain certain information for longer periods if required to do so by law or to establish, exercise, or defend legal claims.</p>
          <p className="font-semibold text-slate-900">6. Data Sharing and Third Parties</p>
          <p>We do not sell or rent your personal data.</p>
          <p>We may share your personal data only with:</p>
          <p className="font-semibold text-slate-900">Service providers / processors, including:</p>
          <p>EmailJS – to process and deliver contact form submissions.</p>
          <p>Email and hosting providers (e.g., Google Workspace, web hosting provider) – to operate the Website and our email systems.</p>
          <p className="font-semibold text-slate-900">Professional advisers, where necessary:</p>
          <p>Such as legal or accounting professionals, subject to confidentiality obligations.</p>
          <p className="font-semibold text-slate-900">Authorities or regulators, where required by law:</p>
          <p>If we are legally obliged to disclose information or if such disclosure is necessary to protect our rights, property, or safety, or the rights, property, or safety of others.</p>
          <p>All third parties processing personal data on our behalf will do so only under our instructions and in line with applicable data protection laws.</p>
          <p className="font-semibold text-slate-900">7. Cookies and Analytics</p>
          <p>The Website may use cookies and similar tracking technologies, as well as analytics tools, to:</p>
          <p>Understand how visitors use the Website</p>
          <p>Improve performance, content, and usability</p>
          <p>Enhance overall user experience</p>
          <p>Where required by law, we will ask for your consent to use non-essential cookies or analytics. You can typically control cookie settings through your browser.</p>
          <p>More detail on cookies and specific tools (if implemented) may be provided in a separate Cookie Notice or updated version of this Policy.</p>
          <p className="font-semibold text-slate-900">8. International Data Transfers</p>
          <p>Because we use third-party services such as EmailJS and Google Workspace, your personal data may be transferred to and stored on servers located outside the Isle of Man, the UK, or the EU.</p>
          <p>Where such transfers occur, we will ensure that appropriate safeguards are in place, such as:</p>
          <p>Adequacy regulations or equivalent frameworks; or</p>
          <p>Standard contractual clauses or similar mechanisms approved under applicable data protection law.</p>
          <p className="font-semibold text-slate-900">9. Your Rights</p>
          <p>Subject to applicable law, you may have the following rights in relation to your personal data:</p>
          <p>Right of access – to request a copy of the personal data we hold about you.</p>
          <p>Right to rectification – to request correction of inaccurate or incomplete data.</p>
          <p>Right to erasure – to request deletion of your personal data, where there is no compelling reason for us to continue processing it.</p>
          <p>Right to restriction of processing – to request that we limit the way we use your data in certain circumstances.</p>
          <p>Right to object – to object to our processing of your data where we are relying on legitimate interests.</p>
          <p>Right to data portability – where applicable, to receive your personal data in a structured, commonly used, and machine-readable format and to transmit it to another controller.</p>
          <p>To exercise any of these rights, please contact us at hello@aboh.studio.</p>
          <p>We may need to verify your identity before fulfilling your request.</p>
          <p>You may also have the right to lodge a complaint with a relevant data protection authority if you believe your rights have been infringed.</p>
          <p className="font-semibold text-slate-900">10. Children’s Data</p>
          <p>The Website is not intended for children under the age of 16, and we do not knowingly collect personal data from children under 16.</p>
          <p>If you believe that a child has provided personal data to us, please contact us at hello@aboh.studio, and we will take appropriate steps to delete such information.</p>
          <p className="font-semibold text-slate-900">11. Security</p>
          <p>We take reasonable technical and organisational measures to protect your personal data from loss, misuse, unauthorised access, disclosure, alteration, or destruction.</p>
          <p>However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          <p className="font-semibold text-slate-900">12. Changes to This Privacy Policy</p>
          <p>We may update this Privacy Policy from time to time to reflect changes in:</p>
          <p>Legal or regulatory requirements</p>
          <p>Our data processing practices</p>
          <p>The Website or services we offer</p>
          <p>When we make changes, we will update the “Effective Date” at the top of this page.</p>
          <p>We encourage you to review this Policy periodically.</p>
          <p>Continued use of the Website after changes are made will constitute your acceptance of the updated Policy.</p>
          <p className="font-semibold text-slate-900">13. Contact Us</p>
          <p>If you have any questions about this Privacy Policy, our use of your personal data, or if you wish to exercise your rights, you can contact us at:</p>
          <p>hello@aboh.studio</p>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
