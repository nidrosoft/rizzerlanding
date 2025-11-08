import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Rizzer',
  description: 'Terms of Service for Rizzer - Your AI Dating Coach. Read our terms and conditions.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-rizzer-pink to-rizzer-salmon text-white py-6">
        <div className="container-custom">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            ← Back to Rizzer
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service for Rizzer</h1>
        <p className="text-gray-600 mb-8">
          <strong>Effective Date:</strong> January 7, 2025<br />
          <strong>Last Updated:</strong> November 7, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Agreement to Terms */}
          <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-yellow-900">Agreement to Terms</h2>
            <p className="text-gray-800 leading-relaxed">
              By accessing or using the Rizzer mobile application ("App," "Service," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-gray-800 leading-relaxed mt-4 font-semibold">
              IMPORTANT: THESE TERMS CONTAIN A MANDATORY ARBITRATION PROVISION AND CLASS ACTION WAIVER THAT REQUIRE THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            
            <h3 className="text-xl font-semibold mb-3">1.1 Binding Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Rizzer. By creating an account or using the App, you:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Acknowledge you have read and understood these Terms</li>
              <li>Agree to comply with all Terms and applicable laws</li>
              <li>Represent that you are legally able to enter into this agreement</li>
              <li>Accept responsibility for your use of the Service</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Age Requirement</h3>
            <p className="text-gray-700 leading-relaxed mb-2 font-semibold">
              You must be at least 18 years old to use Rizzer. By using the App, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>You are 18 years of age or older</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You will not allow anyone under 18 to access your account</li>
              <li>You will provide accurate age information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Violation of this age requirement will result in immediate account termination.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Additional Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-2">Your use of the App is also governed by:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Privacy Policy</strong> - How we collect and use your information</li>
              <li><strong>Cookie Policy</strong> - How we use cookies and tracking technologies</li>
              <li><strong>Community Guidelines</strong> - Standards for user conduct</li>
            </ul>
          </section>

          {/* 2. Description of Service */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 What Rizzer Provides</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rizzer is an AI-powered dating coach application that offers:
            </p>

            <h4 className="text-lg font-semibold mb-2">Core Features:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>AI Conversation Coach:</strong> Generate personalized conversation starters and dating advice</li>
              <li><strong>Date Profile Management:</strong> Organize and track your dating connections</li>
              <li><strong>Personalized Date Ideas:</strong> AI-generated date suggestions based on your preferences</li>
              <li><strong>Gift Investigation:</strong> AI detective service to discover gift ideas</li>
              <li><strong>Genius Rizz Coach:</strong> 24/7 AI dating strategist for real-time advice</li>
              <li><strong>Event Discovery:</strong> Find local dating events and activities</li>
              <li><strong>Rizz Library:</strong> Save and organize conversation starters</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Premium Features:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Unlimited AI conversations</li>
              <li>Advanced date planning</li>
              <li>Priority customer support</li>
              <li>Exclusive features and content</li>
              <li>Ad-free experience</li>
            </ul>
          </section>

          {/* 3. Account Registration and Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-2">To use Rizzer, you must:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Provide accurate, complete, and current information</li>
              <li>Verify your phone number</li>
              <li>Create a secure password</li>
              <li>Complete the onboarding process</li>
              <li>Maintain and update your information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Security</h3>
            <p className="text-gray-700 leading-relaxed mb-2">You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li><strong>Confidentiality:</strong> Keep your login credentials secure</li>
              <li><strong>Unauthorized Access:</strong> Notify us immediately of any unauthorized use</li>
              <li><strong>Account Activity:</strong> All activity that occurs under your account</li>
              <li><strong>Device Security:</strong> Protect your device from unauthorized access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-semibold">
              We are not liable for losses caused by unauthorized use of your account.
            </p>
          </section>

          {/* 4. User Conduct and Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. User Conduct and Prohibited Activities</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 Acceptable Use</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              You agree to use Rizzer only for lawful purposes and in accordance with these Terms. You will:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Treat others with respect</li>
              <li>Provide honest information</li>
              <li>Use features as intended</li>
              <li>Comply with all applicable laws</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Prohibited Conduct</h3>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">You may NOT:</p>

            <h4 className="text-lg font-semibold mb-2">Illegal Activities:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Violate any local, state, national, or international law</li>
              <li>Engage in fraud, scams, or deceptive practices</li>
              <li>Harass, stalk, threaten, or intimidate others</li>
              <li>Share illegal content or promote illegal activities</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">Platform Abuse:</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Create fake or impersonated accounts</li>
              <li>Use bots, scripts, or automation tools</li>
              <li>Attempt to hack, reverse engineer, or exploit the App</li>
              <li>Spam, phish, or send unsolicited messages</li>
              <li>Interfere with or disrupt the Service</li>
            </ul>
          </section>

          {/* 7. AI-Generated Content */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">7. AI-Generated Content</h2>
            
            <h3 className="text-xl font-semibold mb-3">7.1 AI Disclaimer</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Rizzer uses artificial intelligence to generate conversation starters, date ideas, dating advice, gift recommendations, and personalized content.
            </p>
            <p className="text-gray-800 leading-relaxed mb-2 font-semibold">IMPORTANT DISCLAIMERS:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><strong>Not Professional Advice:</strong> AI suggestions are for entertainment and informational purposes only</li>
              <li><strong>No Guarantees:</strong> We do not guarantee accuracy, completeness, or success of AI-generated content</li>
              <li><strong>Use at Your Own Risk:</strong> You are responsible for how you use AI suggestions</li>
              <li><strong>Human Judgment Required:</strong> Always apply your own judgment and discretion</li>
              <li><strong>Not Relationship Counseling:</strong> AI is not a substitute for professional relationship therapy</li>
            </ul>
          </section>

          {/* 8. Premium Subscriptions and Payments */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Premium Subscriptions and Payments</h2>
            
            <h3 className="text-xl font-semibold mb-3">8.1 Subscription Plans</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rizzer offers premium subscription plans with enhanced features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Monthly Subscription:</strong> Billed monthly</li>
              <li><strong>Annual Subscription:</strong> Billed yearly (discounted rate)</li>
              <li><strong>Lifetime Access:</strong> One-time payment</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.4 Cancellation and Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cancel anytime through App Store/Google Play settings. Access continues until end of current billing period. No partial refunds for unused time.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Apple App Store:</strong> Refund requests handled by Apple per their policies</li>
              <li><strong>Google Play:</strong> Refund requests handled by Google per their policies</li>
              <li><strong>General Policy:</strong> No refunds for partial months or unused features</li>
            </ul>
          </section>

          {/* 10. Disclaimers and Limitations of Liability */}
          <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-red-900">10. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold mb-3">10.1 "AS IS" and "AS AVAILABLE"</h3>
            <p className="text-gray-800 leading-relaxed mb-4 font-semibold">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">10.2 No Guarantee of Results</h3>
            <p className="text-gray-800 leading-relaxed mb-2 font-semibold">WE DO NOT GUARANTEE:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-4">
              <li>That you will find a romantic partner</li>
              <li>That AI suggestions will be successful</li>
              <li>That date ideas will lead to positive outcomes</li>
              <li>Any specific results from using the App</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">10.3 Limitation of Liability</h3>
            <p className="text-gray-800 leading-relaxed mb-4 font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIZZER SHALL NOT BE LIABLE FOR INDIRECT DAMAGES, LOST PROFITS, DATA LOSS, PERSONAL INJURY, OR RELATIONSHIP ISSUES.
            </p>
            <p className="text-gray-800 leading-relaxed font-semibold">
              TOTAL LIABILITY CAP: Our total liability shall not exceed the greater of $100 USD or the amount you paid us in the 12 months before the claim.
            </p>
          </section>

          {/* 12. Dispute Resolution and Arbitration */}
          <section className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">12. Dispute Resolution and Arbitration</h2>
            
            <h3 className="text-xl font-semibold mb-3">12.1 Informal Resolution</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Before filing a claim, contact us at <strong>legal@rizzer.app</strong> and allow 60 days for resolution attempt.
            </p>

            <h3 className="text-xl font-semibold mb-3">12.2 Binding Arbitration</h3>
            <p className="text-gray-800 leading-relaxed mb-4 font-semibold">
              PLEASE READ CAREFULLY: THIS SECTION AFFECTS YOUR LEGAL RIGHTS.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              You and Rizzer agree to resolve disputes through binding arbitration instead of court or jury trial. Arbitration is governed by the Federal Arbitration Act (FAA) and administered by the American Arbitration Association (AAA).
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">12.3 Class Action Waiver</h3>
            <p className="text-gray-800 leading-relaxed mb-4 font-semibold">
              YOU AND RIZZER AGREE THAT DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li><strong>No Class Actions:</strong> You may not bring claims as a class member</li>
              <li><strong>No Class Arbitrations:</strong> No class-wide arbitrations allowed</li>
              <li><strong>Individual Relief Only:</strong> Arbitrator may only award individual relief</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">12.4 Opt-Out Right</h3>
            <p className="text-gray-800 leading-relaxed">
              You may opt out of arbitration within 30 days of accepting these Terms by emailing <strong>legal@rizzer.app</strong> with subject "Arbitration Opt-Out" including your name, email, and phone number.
            </p>
          </section>

          {/* 13. Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Termination</h2>
            
            <h3 className="text-xl font-semibold mb-3">13.1 Termination by You</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may terminate your account at any time through Settings → Account → Delete Account or by emailing support@rizzer.app.
            </p>

            <h3 className="text-xl font-semibold mb-3">13.2 Termination by Us</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              We may suspend or terminate your account immediately if you violate these Terms, engage in prohibited conduct, provide false information, or at our sole discretion.
            </p>
          </section>

          {/* 15. Modifications to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">15. Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Material changes will be notified via email and/or in-app notice with 30 days to review. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* 17. Apple and Google Specific Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">17. Apple and Google Specific Terms</h2>
            
            <h3 className="text-xl font-semibold mb-3">17.1 Apple App Store</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you access Rizzer through the Apple App Store, these Terms are between you and Rizzer, not Apple. Apple is not responsible for the App, has no obligation to provide support, and is not liable for any claims. You must comply with Apple's Terms of Service.
            </p>

            <h3 className="text-xl font-semibold mb-3">17.2 Google Play Store</h3>
            <p className="text-gray-700 leading-relaxed">
              If you access Rizzer through Google Play, these Terms are between you and Rizzer, not Google. Google is not responsible for the App and has no obligation to provide support. You must comply with Google's Terms of Service.
            </p>
          </section>

          {/* 18. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms:
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> legal@rizzer.app<br />
              <strong>Support:</strong> support@rizzer.app<br />
              <strong>In-App:</strong> Settings → Help → Contact Support<br />
              <strong>Response Time:</strong> Within 48 hours
            </p>
          </section>

          {/* 19. Acknowledgment */}
          <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-bold mb-4 text-green-900">19. Acknowledgment</h2>
            <p className="text-gray-800 leading-relaxed mb-4 font-semibold">
              BY USING RIZZER, YOU ACKNOWLEDGE THAT:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>You have read and understood these Terms</li>
              <li>You agree to be bound by these Terms</li>
              <li>You are at least 18 years old</li>
              <li>You have the authority to enter into this agreement</li>
              <li>You understand the arbitration and class action waiver provisions</li>
              <li>You consent to electronic communications</li>
              <li>You have reviewed our Privacy Policy and Cookie Policy</li>
            </ul>
          </section>

          {/* Footer */}
          <section className="border-t pt-8 mt-12">
            <p className="text-gray-600 text-center">
              <strong>Effective Date:</strong> January 7, 2025<br />
              <strong>Last Updated:</strong> November 7, 2025<br />
              <strong>Version:</strong> 1.0
            </p>
            <p className="text-gray-600 text-center mt-6 text-lg">
              Thank you for using Rizzer! We're excited to help you succeed in your dating journey.
            </p>
            <p className="text-gray-600 text-center mt-4">
              © 2025 Rizzer. All rights reserved.
            </p>
            <p className="text-center mt-4">
              <Link href="/privacy" className="text-rizzer-pink hover:text-rizzer-salmon underline font-semibold mr-4">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-rizzer-pink hover:text-rizzer-salmon underline font-semibold">
                Cookie Policy
              </Link>
            </p>
            <p className="text-center mt-4 font-semibold">
              Questions? Contact us at <a href="mailto:legal@rizzer.app" className="text-rizzer-pink hover:text-rizzer-salmon underline">legal@rizzer.app</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container-custom text-center">
          <p className="text-gray-400" suppressHydrationWarning>
            © {new Date().getFullYear()} Rizzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
