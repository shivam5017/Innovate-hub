import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 shadow-md rounded-lg pt-24 font-primary">
      <h1 className="text-lg lg:text-xl font-bold text-center mb-4">
        Terms and Conditions for Innovate Hub
      </h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 31.10.2024
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-2">
          By accessing or using our services, you agree to comply with and be
          bound by these Terms and Conditions. If you do not agree with any
          part of these terms, you must not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
        <p className="mb-2">
        Innovate Hub provides a Technology/Innovation Hub that offers various Software as a Service (SaaS) products. 
       
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <p className="mb-2">
          Users agree to:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Use the services in compliance with applicable laws.</li>
          <li>Respect the rights of other users and third parties.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p className="mb-2">
          All content, trademarks, and other intellectual property on our
          website are owned by Innovate Hub or our licensors. You may not use,
          reproduce, or distribute any content without our explicit consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p className="mb-2">
          Innovate Hub is not liable for any indirect, incidental, or
          consequential damages arising from the use or inability to use our
          services. Your use of our services is at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
        <p className="mb-2">
          We may update these Terms and Conditions from time to time. We will
          notify you of any changes by posting the new terms on this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>
        <p className="mb-2">
          <strong>Innovate Hub</strong>
          <br />
           innovatehubhq@gmail.com
           <br />
           Discord: 
           <button className="text-blue-600" onClick={()=> window.open("https://discord.gg/xtYsPCCC","_blank")}>
                Innovate HUB
           </button>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
