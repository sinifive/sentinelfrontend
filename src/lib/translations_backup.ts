export const translations = {
  english: {
    // Risk Score Section
    riskLevel: "Risk Level",
    high: "HIGH",
    medium: "MEDIUM",
    low: "LOW",
    confidence: "Confidence",
    
    // Verdict Section
    verdict: "Verdict",
    recommendedAction: "What You Should Do",
    verdictHigh: "This message is likely a smishing attempt",
    verdictMedium: "This message shows some suspicious characteristics",
    verdictLow: "This message appears to be legitimate",
    actionHigh: "Do NOT click links or share personal information",
    actionMedium: "Verify the sender through official channels before responding",
    actionLow: "Safe to proceed, but always stay vigilant",
    
    // Threat Section (risk-conditional titles)
    whyDangerous: "Why Is This Dangerous?",
    proceedWithCaution: "Proceed with Caution",
    thingsToNote: "Things to Note",
    threatIndicators: "Threat Indicators Found",
    suspiciousLinkDetected: "Suspicious Link Detected",
    suspiciousLinkDesc: "The message contains a shortened or suspicious URL",
    urgencyTactics: "Urgency Tactics Detected",
    urgencyTacticsDesc: "The message creates artificial time pressure",
    infoRequest: "Information Request (Red Flag)",
    infoRequestDesc: "Asks for sensitive information like OTP/PIN",
    unknownSender: "Unknown Sender",
    unknownSenderDesc: "Number not in your contacts",
    
    // Recommendations
    whatToDo: "What Should You Do?",
    immediateActions: "IMMEDIATE ACTIONS",
    doNot: "DO NOT",
    ifAlreadyClicked: "IF YOU ALREADY CLICKED OR SHARED INFO",
    
    deleteMessage: "Delete this message now",
    blockNumber: "Block this phone number",
    tellFriends: "Tell 3 friends about this scam",
    callBank: "Call your bank if needed",
    bankHelpline: "Bank Fraud Helpline: 1800-XXX-XXXX",
    
    dontClickLinks: "Don't click any links in the message",
    dontShareOTP: "Don't share OTP or password with anyone",
    dontCallBack: "Don't call the number back",
    dontSendMoney: "Don't send money",
    
    callBankImmediately: "Call your bank immediately: 1800-XXX-XXXX",
    reportCyberCrime: "Report to Cyber Crime: 1930",
    blockCard: "Block your card through bank app",
    changePasswords: "Change all passwords now",
    
    // Save & Share
    saveAnalysis: "Save This Analysis",
    keepEvidence: "Keep evidence for reporting or warning others",
    downloadPDF: "Download PDF",
    shareAnalysis: "Share This Analysis",
    copyLink: "Copy Link",
    
    // Share Modal
    shareFormat: "Share Format",
    fullReport: "Full Report - Complete detailed analysis",
    quickWarning: "Quick Warning - Summary with key points",
    anonymous: "Anonymous - No personal info included",
    shareVia: "Share Via",
    preview: "Preview",
    privacyNotice: "Your personal details will not be shared",
    linkCopied: "Link copied! Valid for 7 days",
    generateLink: "Generate Share Link",
    
    // Chatbot
    askAnything: "Ask Me Anything",
    typeQuestion: "Type your question...",
    
    // Quick Questions
    whyRisky: "Why is this considered risky?",
    whatIfClicked: "What if I already clicked the link?",
    howToReport: "How do I report this to police?",
    whatIfSharedOTP: "What if I shared my OTP?",
    
    // Sender Analysis
    senderAnalysis: "Sender Analysis",
    phoneNumber: "Phone Number",
    inContacts: "In your contacts",
    notInContacts: "Not in your contacts",
    reportedAsSpam: "Reported {count} times as spam",
    recentlyActivated: "Recently activated number",
    
    // Content Analysis
    contentAnalysis: "Content Analysis",
    suspiciousLink: "Suspicious link",
    highUrgency: "High urgency language detected",
    grammarScore: "Grammar score",
    suspiciousKeywords: "Suspicious keywords",

    // Navigation
    home: "Home",
    about: "About",
    help: "Help",
    tryDemo: "Try Demo",
    analyze: "Analyze",
    history: "History",
    settings: "Settings",
    login: "Login",
    signUp: "Sign Up",
    logout: "Logout",

    // Hero Section
    heroStat: "â‚¹1,200 Cr",
    heroStatDesc: "lost to SMS scams last year in India",
    heroTitle: "Stop Scammers.",
    heroTitleGradient: "Protect Your Money.",
    heroDescription: "Paste any suspicious message. Our AI checks it in 3 seconds. Get clear answers in Hindi, English, or Telugu. Completely free.",
    analyzeButton: "Analyze Now",
    tryFreeButton: "Try Free (3 Messages)",
    analyzeMessage: "Analyze a Message",
    seeHowItWorks: "See How It Works",
    aiAssistant: "AI Assistant",

    // Features Section
    whySentinelAI: "Why SentinelAI?",
    featureSpeed: "3-Second Analysis",
    featureSpeedDesc: "Paste message, get answer instantly. No waiting, no hassle.",
    featureLanguage: "Speaks Your Language",
    featureLanguageDesc: "Full analysis in Hindi, English, Telugu, Urdu, and Tamil. Simple words, clear explanations.",
    featureRural: "Built for Rural India",
    featureRuralDesc: "Designed for everyone. No tech knowledge needed. Free forever.",
    featureSecurity: "Private & Secure",
    featureSecurityDesc: "Your messages stay private. We delete them after 30 days. No tracking, no ads.",

    // Trust Section (badges)
    trustFreeTitle: "100% Free Forever",
    trustFreeDesc: "No credit card needed. Ever.",
    trustLangsTitle: "5 Languages",
    trustLangsDesc: "Hindi, English, Telugu, Urdu, and Tamil supported",
    trustIndiaTitle: "Made for India",
    trustIndiaDesc: "Built specifically for Indian scam patterns",
    trustSecurityTitle: "Privacy First",
    trustSecurityDesc: "Your data is encrypted and auto-deleted",

    // Statistics Section
    stats1Title: "SMS Scams Detected",
    stats2Title: "Users Protected",
    stats3Title: "False Positives",

    // CTA Section
    readyToProtect: "Ready to Protect Yourself?",
    startAnalyzing: "Start Analyzing Now",
    noCardRequired: "No credit card required",

    // Footer
    company: "Company",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    followUs: "Follow Us",

    // Auth
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot Password?",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",

    // Analysis Page
    enterMessage: "Enter the suspicious message",
    selectLanguage: "Select Language",
    cancel: "Cancel",
    save: "Save",
    share: "Share",

    // Analyze Page
    pasteMessage: "Paste the suspicious message",
    senderPhone: "Sender's Phone Number",
    messageDate: "Message Date",
    messageTime: "Message Time",
    optional: "Optional",
    uploadScreenshot: "Upload Screenshot",
    dragDropFile: "Drag and drop your file here or click to select",
    supportedFormats: "Supported: PNG, JPG (Max 5MB)",
    analyzeNow: "Analyze Now",
    loading: "Loading...",
    analyzing: "Analyzing...",
    
    // Analysis Results
    riskAssessment: "Risk Assessment",
    threatLevel: "Threat Level",
    riskPercentage: "{score}% Risk",
    recommendations: "Recommendations",
    immediateSteps: "Immediate Steps",
    precautions: "Precautions to Take",
    reportPolice: "Report to Police",
    keepAnalysis: "Keep This Analysis",
    downloadAs: "Download as PDF",
    printAnalysis: "Print Analysis",

    // History Page
    analysisHistory: "Analysis History",
    noAnalysisYet: "No analysis history yet",
    totalAnalyzed: "Total Analyzed",
    highRiskCount: "High Risk",
    mediumRiskCount: "Medium Risk",
    lowRiskCount: "Low Risk",
    dateAnalyzed: "Date Analyzed",
    riskScore: "Risk Score",
    sender: "Sender",
    messagePreview: "Message Preview",
    actions: "Actions",
    view: "View",
    delete: "Delete",
    deleteConfirm: "Are you sure you want to delete this analysis?",

    // Settings Page
    userSettings: "User Settings",
    accountSettings: "Account Settings",
    preferences: "Preferences",
    language: "Language",
    theme: "Theme",
    notifications: "Notifications",
    emailNotifications: "Email Notifications",
    enableNotifications: "Enable email alerts for high-risk messages",
    autoDelete: "Auto-delete Analysis",
    deleteAfter: "Delete analyses automatically after 30 days",
    version: "Version",
    signInTitle: "Sign In to SentinelAI",
    createAccount: "Create Account",
    enterEmail: "Enter your email address",
    enterPassword: "Enter your password",
    confirmPassword: "Confirm your password",
    signIn: "Sign In",
    orContinueWith: "Or continue with",
    googleSignIn: "Sign in with Google",
    agreeTerms: "I agree to the Terms and Privacy Policy",
    haveAccount: "Already have an account?",
    noAccount: "Don't have an account?",
    resetPassword: "Reset Password",
    checkEmail: "Check your email for password reset link",

    // Demo Page
    demoMode: "Demo Mode",
    freeAnalyses: "Free Analyses Remaining",
    demoTip: "Try 3 analyses for free!",
    loginToSave: "Login to save your analyses",

    // Home Page Additional
    buildForIndia: "Built for India",
    protectFamilyAndBusiness: "Protect your family and business from SMS fraud",
    learnMore: "Learn More",
    getStarted: "Get Started",
    testimonials: "What People Say",
    seePage: "See our",
    dataSecurityPage: "Data Security page",
    forDetails: "for more details",

    // Footer Additional
    aboutUs: "About Us",
    ourMission: "Our mission is to protect rural India from SMS fraud",
    quickLinks: "Quick Links",
    resources: "Resources",
    fAQ: "FAQ",
    blogPostsAndUpdates: "Blog, Posts & Updates",
    copyright: "All rights reserved",
    builtWith: "Built with",
    love: "â¤ï¸",

    // Common
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Information",
    confirm: "Confirm",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    skip: "Skip",
    continue: "Continue",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    more: "More",
    less: "Less",
    show: "Show",
    hide: "Hide",
    expand: "Expand",
    collapse: "Collapse",
    download: "Download",
    upload: "Upload",
    copy: "Copy",
    copiedToClipboard: "Copied to Clipboard",
    tryAgain: "Try Again",
    goHome: "Go Home",

    // About Page
    whyWeBuiltThis: "Why We Built This",
    aboutIntro: "Every week, thousands of rural Indians receive SMS messages that look real but aren't.",
    aboutProblem: "A message claiming their Aadhaar is expiring. A fake bank alert saying their account will be closed. A lottery they never entered. A government scheme that doesn't exist.",
    aboutProblem2: "These messages are designed to create panic. They use official-sounding language. They threaten consequences. They demand immediate action.",
    aboutProblem3: "And they work.",
    aboutStats: "In 2023 alone, Indians lost over â‚¹1,200 Crores to SMS fraud.",
    aboutMission: "We built SentinelAI because everyone deserves protection, regardless of where they live or what language they speak.",
    problemIsReal: "The Problem Is Real",
    realityOfFraud: "The reality of SMS fraud in India",
    lostToFraud: "Lost to SMS fraud in India (2023)",
    cyberCrimeReports: "Cyber Crime Reports",
    victimLiveRural: "Of victims live in rural areas",
    yearOverYearIncrease: "Year-over-year increase in smishing",
    averageVictimLoss: "Average victim loss (often life savings)",
    reportedToAuthorities: "Only 23% of scams are reported to authorities",
    cannotIdentifyScams: "78% of rural Indians cannot identify common scam patterns",
    dontSeekHelp: "43% of victims don't seek help due to shame",
    bankingScramsAccount: "Banking scams account for 43% of all SMS fraud",
    moreAlarmingFacts: "More Alarming Facts",
    whyRuralTargeted: "Why Rural Areas Are Targeted",
    limitedDigitalLiteracy: "Limited digital literacy and scam awareness",
    languageBarriers: "Language barriers (scam warnings only in English)",
    trustInMessages: "Trust in official-looking messages",
    lessAccessToEducation: "Less access to fraud education resources",
    delayedReportingAllows: "Delayed reporting allows scammers to operate longer",
    ourSolution: "Our Solution",
    simpleAccessibleProtection: "Simple, free, and accessible protection for everyone",
    threeSecondAnalysis: "3-Second Analysis",
    freeAiAnalyzes: "Free AI that analyzes messages instantly",
    worksInYourLanguage: "Works in your language (more coming)",
    builtForEveryone: "Built for Everyone",
    noTechNeeded: "No tech knowledge needed",
    privacyFirst: "Privacy First",
    messagesEncrypted: "Messages encrypted and deleted after 30 days",
    indiaSpecific: "India-Specific",
    trainedOnIndian: "Trained on Indian scam patterns",
    freeForever: "Free Forever",
    noAdsTracking: "No ads, no tracking, no hidden costs",
    fourSimpleSteps: "Four simple steps to protect yourself",
    copyTheSuspicious: "Copy the suspicious message text",
    aiAnalysis: "AI Analysis",
    weCheck47: "We check 47 known fraud patterns",
    getVerdict: "Get Verdict",
    clearAnswer: "Clear answer: Safe, Suspicious, or Scam",
    takeAction: "Take Action",
    simpleStepsInLanguage: "Simple steps in your language",

    // Help Page
    helpCenter: "Help Center",
    findAnswers: "Find answers to common questions about SentinelAI",
    general: "General",
    howDoesWork: "How does SentinelAI work?",
    pasteYourMessage: "Paste your message, our AI analyzes it in 3 seconds, you get a clear answer in your language.",
    isItReallyFree: "Is it really free?",
    yesCompletelyfree: "Yes. Completely free. No credit card, no hidden fees, forever. Funded by grants and donations.",
    whichLanguagesSupported: "Which languages are supported?",
    hindiEnglishTelugu: "Hindi, English, and Telugu. More Indian languages coming soon.",
    doINeedAccount: "Do I need to create an account?",
    noForTrying: "No for trying the demo. Yes for saving your analysis history and accessing full features.",
    privacySecurity: "Privacy & Security",
    isMyDataSafe: "Is my data safe?",
    yesWeEncrypt: "Yes. We encrypt all messages, automatically delete after 30 days, and never share with anyone.",
    canYouRead: "Can you read my messages?",
    aiAnalyzesAuto: "Our AI analyzes them automatically, but no human ever sees your messages.",
    whatDoYouDo: "What do you do with uploaded screenshots?",
    sameAsText: "Same as text - analyze, encrypt, and auto-delete after 30 days. No human access.",
    usingSentinelAI: "Using SentinelAI",
    howAccurate: "How accurate is the detection?",
    continuouslyImproving: "We're continuously improving. Our AI is trained on thousands of known scam patterns specific to India.",
    whatIfSays: "What if it says my message is safe but I'm still unsure?",
    alwaysTrustInstinct: "Always trust your instinct. If something feels wrong, don't click links or share any personal information.",
    canIReport: "Can I report incorrect results?",
    yesPleaseUse: "Yes, please do. Use the feedback button in the analysis report to help us improve.",
    whatIfClickedLink: "What should I do if I already clicked a scam link?",
    actImmediately: "Act immediately: (1) Disconnect from internet, (2) Don't enter any information on the opened site, (3) Call your bank's fraud helpline, (4) Change all passwords, (5) Monitor your accounts for 48 hours, (6) Report to Cyber Crime: 1930",
    canIUseWhatsapp: "Can I use this for WhatsApp or other app messages?",
    yesPasteAnyText: "Yes, paste any text message from any platform - SMS, WhatsApp, Telegram, Facebook, email.",
    stillHaveQuestions: "Still have questions?",
    emailUs: "Email us: support@sentinelai.com",
    responseTime: "Response time: Usually within 24 hours",

    // Contact Page
    getTouchTitle: "Get in Touch",
    haveQuestions: "Have questions? We're here to help. Send us a message and we'll respond within 24 hours.",
    fullName: "Full Name *",
    yourName: "Your name",
    emailAddress: "Email Address *",
    youAtExample: "you@example.com",
    subject: "Subject",
    selectSubject: "Select a subject",
    generalInquiry: "General Inquiry",
    technicalSupport: "Technical Support",
    reportFalsePositive: "Report False Positive",
    reportScam: "Report a Scam",
    partnershipOpportunity: "Partnership Opportunity",
    pressMedia: "Press/Media Inquiry",
    other: "Other",
    messageLabel: "Message *",
    howCanWeHelp: "How can we help you?",
    sendMessage: "Send Message",
    responseTimeContact: "Usually within 24 hours",
    mondayFriday: "Monday-Friday, 9 AM - 6 PM IST",
    alreadyBeenScammed: "Already Been Scammed?",
    dontWaitReport: "Don't wait - report immediately to authorities:",
    cyberCrimeHelpline: "Cyber Crime Helpline: 1930",
    available24By7: "Available 24/7 â€¢ Call your bank immediately",
    connectWithUs: "Connect With Us",

    // FAQ Page
    faqTitle: "Frequently Asked Questions",
    whatIsSmishing: "What is smishing and how does it work?",
    smishingDef: "Smishing is SMS phishing - fraudulent text messages designed to steal personal information or money. Scammers impersonate banks, government agencies, or companies to trick you into clicking malicious links or sharing sensitive data.",
    howAccurateIs: "How accurate is your detection system?",
    accuracyDef: "Our AI achieves 98% accuracy by analyzing millions of scam patterns. We continuously train on new fraud techniques reported across India.",
    isReallyFree: "Is this service really free?",
    freeAnswer: "Yes! SentinelAI is completely free. Our mission is protecting rural India from SMS fraud, not profit.",
    languagesSupported: "What languages are supported?",
    languagesAnswer: "We support English, Hindi (à¤¹à¤¿à¤‚à¤¦à¥€), and Telugu (à°¤à±†à°²à±à°—à±). More regional languages coming soon!",
    dataSecurePrivate: "Is my data secure and private?",
    dataSecureAnswer: "Absolutely. Messages are encrypted, analyzed securely, and automatically deleted after 30 days. We never share your data.",
    whatIfFellForScam: "What should I do if I already fell for a scam?",
    scamReaction: "Act immediately: 1) Call your bank to freeze accounts, 2) Report to Cyber Crime Helpline 1930, 3) Change all passwords, 4) File complaint at cybercrime.gov.in",

    // Demo Page
    demoIntro: "This is a demo with a sample message. Sign up to analyze your own messages.",
    signUpFree: "Sign Up Free",
    tryDemoAnalysis: "Try Demo Analysis",
    demoAnalysesRemaining: "demo analyses remaining. Sign up for unlimited access.",
    sendersNumber: "Sender's Number",
    messageText: "Message Text",
    sampleMessage: "URGENT: Your SBI account has been temporarily suspended due to KYC verification pending. Click here to verify immediately: bit.ly/sbi-kyc-2024 or your account will be closed within 24 hours. Customer care: 1800-XXXX",
    analyzingContent: "Analyzing message content...",
    checkingSender: "Checking sender reputation...",
    scanningMalicious: "Scanning for malicious links...",
    generatingReport: "Generating risk report...",
    likelySmishing: "This message is likely a smishing attempt",
    doNotClickLinksDemo: "Do NOT click links or share personal information",
    suspiciousLinkDetectedDemo: "Suspicious Link Detected",
    containsShortened: "Contains shortened URL (bit.ly)",
    urgencyTacticsDemo: "Urgency Tactics",
    createsArtificial: "Creates artificial time pressure (24 hours)",
    bankImpersonation: "Bank Impersonation",
    pretendsSbi: "Pretends to be from SBI",
    kycScamPattern: "KYC Scam Pattern",
    matchesKnownKyc: "Matches known KYC fraud pattern",
    analysisCompleteDemo: "Analysis Complete",
    riskLevelDemo: "Risk Level: HIGH (92/100)",

    // Terms Page
    termsOfService: "Terms of Service",
    termsLastUpdated: "Last updated: January 7, 2026",

    // Privacy Page
    privacyPolicy: "Privacy Policy",
    privacyLastUpdated: "Last updated: January 7, 2026",

    // Data Security Page
    dataSecurity: "Data Security",
    securityLastUpdated: "Last updated: January 7, 2026",
    endToEndEncryption: "End-to-End Encryption",
    tlsDescription: "All data transmitted to and from SentinelAI is encrypted using TLS 1.3",
    secureInfrastructure: "Secure Infrastructure",
    socCompliant: "Our servers are hosted in SOC 2 compliant data centers in India",
    privacyByDesign: "Privacy by Design",
    collectEssentialOnly: "We collect only essential data and anonymize it wherever possible",
    accessControls: "Access Controls",
    roleBasedAccess: "Strict role-based access controls protect your data internally",
    encryptionPractices: "Encryption Practices",
    industryLeadingStandards: "We employ industry-leading encryption standards:",
    tlsInTransit: "TLS 1.3 for all data in transit",
    aes256Rest: "AES-256 encryption for data at rest",
    secureKeyManagement: "Secure key management with regular rotation",
    perfectForward: "Perfect forward secrecy for communication sessions",
    complianceStandards: "Compliance Standards",
    adheres: "SentinelAI adheres to:",
    itAct: "Information Technology Act, 2000 (India)",
    personalDataProtection: "Personal Data Protection guidelines",
  },
  hindi: {
    // Risk Score Section
    riskLevel: "à¤œà¥‹à¤–à¤¿à¤® à¤¸à¥à¤¤à¤°",
    high: "à¤‰à¤šà¥à¤š",
    medium: "à¤®à¤§à¥à¤¯à¤®",
    low: "à¤•à¤®",
    confidence: "à¤µà¤¿à¤¶à¥à¤µà¤¸à¤¨à¥€à¤¯à¤¤à¤¾",
    
    // Verdict Section
    verdict: "à¤¨à¤¿à¤°à¥à¤£à¤¯",
    recommendedAction: "à¤†à¤ªà¤•à¥‹ à¤•à¥à¤¯à¤¾ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
    verdictHigh: "à¤¯à¤¹ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤à¤• à¤¸à¥à¤®à¤¿à¤¶à¤¿à¤‚à¤— à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤¹à¥‹ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ",
    verdictMedium: "à¤‡à¤¸ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤®à¥‡à¤‚ à¤•à¥à¤› à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤µà¤¿à¤¶à¥‡à¤·à¤¤à¤¾à¤à¤‚ à¤¹à¥ˆà¤‚",
    verdictLow: "à¤¯à¤¹ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤µà¥ˆà¤§ à¤ªà¥à¤°à¤¤à¥€à¤¤ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ",
    actionHigh: "à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤¨ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚",
    actionMedium: "à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¦à¥‡à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤šà¥ˆà¤¨à¤²à¥‹à¤‚ à¤¸à¥‡ à¤ªà¥à¤°à¥‡à¤·à¤• à¤•à¥‹ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¥‡à¤‚",
    actionLow: "à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¤¨à¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆ, à¤²à¥‡à¤•à¤¿à¤¨ à¤¹à¤®à¥‡à¤¶à¤¾ à¤¸à¤¤à¤°à¥à¤• à¤°à¤¹à¥‡à¤‚",
    
    // Threat Section (risk-conditional titles)
    whyDangerous: "à¤¯à¤¹ à¤–à¤¤à¤°à¤¨à¤¾à¤• à¤•à¥à¤¯à¥‹à¤‚ à¤¹à¥ˆ?",
    proceedWithCaution: "à¤¸à¤¾à¤µà¤§à¤¾à¤¨à¥€ à¤¸à¥‡ à¤†à¤—à¥‡ à¤¬à¤¢à¤¼à¥‡à¤‚",
    thingsToNote: "à¤§à¥à¤¯à¤¾à¤¨ à¤¦à¥‡à¤¨à¥‡ à¤¯à¥‹à¤—à¥à¤¯ à¤¬à¤¾à¤¤à¥‡à¤‚",
    threatIndicators: "à¤–à¤¤à¤°à¥‡ à¤•à¥‡ à¤¸à¤‚à¤•à¥‡à¤¤à¤• à¤®à¤¿à¤²à¥‡",
    suspiciousLinkDetected: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤²à¤¿à¤‚à¤• à¤ªà¤¾à¤¯à¤¾ à¤—à¤¯à¤¾",
    suspiciousLinkDesc: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤®à¥‡à¤‚ à¤à¤• à¤›à¥‹à¤Ÿà¤¾ à¤¯à¤¾ à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ URL à¤¹à¥ˆ",
    urgencyTactics: "à¤¤à¤¾à¤¤à¥à¤•à¤¾à¤²à¤¿à¤•à¤¤à¤¾ à¤°à¤£à¤¨à¥€à¤¤à¤¿ à¤ªà¤¾à¤ˆ à¤—à¤ˆ",
    urgencyTacticsDesc: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥ƒà¤¤à¥à¤°à¤¿à¤® à¤¸à¤®à¤¯ à¤¦à¤¬à¤¾à¤µ à¤¬à¤¨à¤¾à¤¤à¤¾ à¤¹à¥ˆ",
    infoRequest: "à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤•à¤¾ à¤…à¤¨à¥à¤°à¥‹à¤§ (à¤–à¤¤à¤°à¥‡ à¤•à¤¾ à¤¸à¤‚à¤•à¥‡à¤¤)",
    infoRequestDesc: "OTP/PIN à¤œà¥ˆà¤¸à¥€ à¤¸à¤‚à¤µà¥‡à¤¦à¤¨à¤¶à¥€à¤² à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤®à¤¾à¤‚à¤—à¤¤à¤¾ à¤¹à¥ˆ",
    unknownSender: "à¤…à¤œà¥à¤žà¤¾à¤¤ à¤ªà¥à¤°à¥‡à¤·à¤•",
    unknownSenderDesc: "à¤¨à¤‚à¤¬à¤° à¤†à¤ªà¤•à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤•à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ",
    
    // Recommendations
    whatToDo: "à¤†à¤ªà¤•à¥‹ à¤•à¥à¤¯à¤¾ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    immediateActions: "à¤¤à¥à¤°à¤‚à¤¤ à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ",
    doNot: "à¤¯à¤¹ à¤¨ à¤•à¤°à¥‡à¤‚",
    ifAlreadyClicked: "à¤…à¤—à¤° à¤†à¤ªà¤¨à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¹à¥€ à¤•à¥à¤²à¤¿à¤• à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤¯à¤¾ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤¾à¤à¤¾ à¤•à¤° à¤¦à¥€",
    
    deleteMessage: "à¤‡à¤¸ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥‹ à¤…à¤­à¥€ à¤¹à¤Ÿà¤¾à¤à¤‚",
    blockNumber: "à¤‡à¤¸ à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤•à¥‹ à¤¬à¥à¤²à¥‰à¤• à¤•à¤°à¥‡à¤‚",
    tellFriends: "3 à¤¦à¥‹à¤¸à¥à¤¤à¥‹à¤‚ à¤•à¥‹ à¤‡à¤¸ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤¬à¤¤à¤¾à¤à¤‚",
    callBank: "à¤œà¤°à¥‚à¤°à¤¤ à¤¹à¥‹ à¤¤à¥‹ à¤…à¤ªà¤¨à¥‡ à¤¬à¥ˆà¤‚à¤• à¤•à¥‹ à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚",
    bankHelpline: "à¤¬à¥ˆà¤‚à¤• à¤«à¥à¤°à¥‰à¤¡ à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨: 1800-XXX-XXXX",
    
    dontClickLinks: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤®à¥‡à¤‚ à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤¨ à¤•à¤°à¥‡à¤‚",
    dontShareOTP: "à¤•à¤¿à¤¸à¥€ à¤•à¥‡ à¤¸à¤¾à¤¥ OTP à¤¯à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚",
    dontCallBack: "à¤¨à¤‚à¤¬à¤° à¤ªà¤° à¤µà¤¾à¤ªà¤¸ à¤•à¥‰à¤² à¤¨ à¤•à¤°à¥‡à¤‚",
    dontSendMoney: "à¤ªà¥ˆà¤¸à¥‡ à¤¨ à¤­à¥‡à¤œà¥‡à¤‚",
    
    callBankImmediately: "à¤¤à¥à¤°à¤‚à¤¤ à¤…à¤ªà¤¨à¥‡ à¤¬à¥ˆà¤‚à¤• à¤•à¥‹ à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚: 1800-XXX-XXXX",
    reportCyberCrime: "à¤¸à¤¾à¤‡à¤¬à¤° à¤•à¥à¤°à¤¾à¤‡à¤® à¤®à¥‡à¤‚ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚: 1930",
    blockCard: "à¤¬à¥ˆà¤‚à¤• à¤à¤ª à¤¸à¥‡ à¤…à¤ªà¤¨à¤¾ à¤•à¤¾à¤°à¥à¤¡ à¤¬à¥à¤²à¥‰à¤• à¤•à¤°à¥‡à¤‚",
    changePasswords: "à¤…à¤­à¥€ à¤¸à¤­à¥€ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¥‡à¤‚",
    
    // Save & Share
    saveAnalysis: "à¤‡à¤¸ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‹ à¤¸à¤¹à¥‡à¤œà¥‡à¤‚",
    keepEvidence: "à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿà¤¿à¤‚à¤— à¤¯à¤¾ à¤¦à¥‚à¤¸à¤°à¥‹à¤‚ à¤•à¥‹ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€ à¤¦à¥‡à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¬à¥‚à¤¤ à¤°à¤–à¥‡à¤‚",
    downloadPDF: "PDF à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
    shareAnalysis: "à¤‡à¤¸ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‹ à¤¸à¤¾à¤à¤¾ à¤•à¤°à¥‡à¤‚",
    copyLink: "à¤²à¤¿à¤‚à¤• à¤•à¥‰à¤ªà¥€ à¤•à¤°à¥‡à¤‚",
    
    // Share Modal
    shareFormat: "à¤¶à¥‡à¤¯à¤° à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ª",
    fullReport: "à¤ªà¥‚à¤°à¥à¤£ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ - à¤µà¤¿à¤¸à¥à¤¤à¥ƒà¤¤ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    quickWarning: "à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€ - à¤®à¥à¤–à¥à¤¯ à¤¬à¤¿à¤‚à¤¦à¥à¤“à¤‚ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤¾à¤°à¤¾à¤‚à¤¶",
    anonymous: "à¤—à¥à¤®à¤¨à¤¾à¤® - à¤•à¥‹à¤ˆ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¨à¤¹à¥€à¤‚",
    shareVia: "à¤‡à¤¸à¤•à¥‡ à¤®à¤¾à¤§à¥à¤¯à¤® à¤¸à¥‡ à¤¸à¤¾à¤à¤¾ à¤•à¤°à¥‡à¤‚",
    preview: "à¤ªà¥‚à¤°à¥à¤µà¤¾à¤µà¤²à¥‹à¤•à¤¨",
    privacyNotice: "à¤†à¤ªà¤•à¥€ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤¾à¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤•à¥€ à¤œà¤¾à¤à¤—à¥€",
    linkCopied: "à¤²à¤¿à¤‚à¤• à¤•à¥‰à¤ªà¥€ à¤¹à¥‹ à¤—à¤¯à¤¾! 7 à¤¦à¤¿à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¤¾à¤¨à¥à¤¯",
    generateLink: "à¤¶à¥‡à¤¯à¤° à¤²à¤¿à¤‚à¤• à¤¬à¤¨à¤¾à¤à¤‚",
    
    // Chatbot
    askAnything: "à¤®à¥à¤à¤¸à¥‡ à¤•à¥à¤› à¤­à¥€ à¤ªà¥‚à¤›à¥‡à¤‚",
    typeQuestion: "à¤…à¤ªà¤¨à¤¾ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¥‡à¤‚...",
    
    // Quick Questions
    whyRisky: "à¤‡à¤¸à¥‡ à¤œà¥‹à¤–à¤¿à¤® à¤­à¤°à¤¾ à¤•à¥à¤¯à¥‹à¤‚ à¤®à¤¾à¤¨à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ?",
    whatIfClicked: "à¤…à¤—à¤° à¤®à¥ˆà¤‚à¤¨à¥‡ à¤ªà¤¹à¤²à¥‡ à¤¹à¥€ à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤¤à¥‹?",
    howToReport: "à¤®à¥ˆà¤‚ à¤‡à¤¸à¥‡ à¤ªà¥à¤²à¤¿à¤¸ à¤®à¥‡à¤‚ à¤•à¥ˆà¤¸à¥‡ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‚à¤‚?",
    whatIfSharedOTP: "à¤…à¤—à¤° à¤®à¥ˆà¤‚à¤¨à¥‡ à¤…à¤ªà¤¨à¤¾ OTP à¤¸à¤¾à¤à¤¾ à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤¤à¥‹?",
    
    // Sender Analysis
    senderAnalysis: "à¤ªà¥à¤°à¥‡à¤·à¤• à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    phoneNumber: "à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤°",
    inContacts: "à¤†à¤ªà¤•à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤•à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¹à¥ˆ",
    notInContacts: "à¤†à¤ªà¤•à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤•à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ",
    reportedAsSpam: "{count} à¤¬à¤¾à¤° à¤¸à¥à¤ªà¥ˆà¤® à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾",
    recentlyActivated: "à¤¹à¤¾à¤² à¤¹à¥€ à¤®à¥‡à¤‚ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¨à¤‚à¤¬à¤°",
    
    // Content Analysis
    contentAnalysis: "à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    suspiciousLink: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤²à¤¿à¤‚à¤•",
    highUrgency: "à¤‰à¤šà¥à¤š à¤¤à¤¾à¤¤à¥à¤•à¤¾à¤²à¤¿à¤•à¤¤à¤¾ à¤­à¤¾à¤·à¤¾ à¤•à¤¾ à¤ªà¤¤à¤¾ à¤šà¤²à¤¾",
    grammarScore: "à¤µà¥à¤¯à¤¾à¤•à¤°à¤£ à¤¸à¥à¤•à¥‹à¤°",
    suspiciousKeywords: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤•à¥€à¤µà¤°à¥à¤¡",

    // Navigation
    home: "à¤¹à¥‹à¤®",
    about: "à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚",
    help: "à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾",
    tryDemo: "à¤¡à¥‡à¤®à¥‹ à¤†à¤œà¤®à¤¾à¤à¤‚",
    analyze: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚",
    history: "à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸",
    settings: "à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸",
    login: "à¤²à¥‰à¤—à¤¿à¤¨",
    signUp: "à¤¸à¤¾à¤‡à¤¨ à¤…à¤ª à¤•à¤°à¥‡à¤‚",
    logout: "à¤²à¥‰à¤— à¤†à¤‰à¤Ÿ à¤•à¤°à¥‡à¤‚",

    // Hero Section
    heroStat: "â‚¹1,200 à¤•à¤°à¥‹à¤¡à¤¼",
    heroStatDesc: "à¤ªà¤¿à¤›à¤²à¥‡ à¤¸à¤¾à¤² à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ SMS à¤¸à¥à¤•à¥ˆà¤® à¤¸à¥‡ à¤–à¥‹à¤ à¤—à¤",
    heroTitle: "à¤¸à¥à¤•à¥ˆà¤®à¤°à¥à¤¸ à¤•à¥‹ à¤°à¥‹à¤•à¥‡à¤‚à¥¤",
    heroTitleGradient: "à¤…à¤ªà¤¨à¥‡ à¤ªà¥ˆà¤¸à¥‡ à¤•à¥€ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤•à¤°à¥‡à¤‚à¥¤",
    heroDescription: "à¤•à¥‹à¤ˆ à¤­à¥€ à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¤°à¥‡à¤‚à¥¤ à¤¹à¤®à¤¾à¤°à¤¾ AI 3 à¤¸à¥‡à¤•à¤‚à¤¡ à¤®à¥‡à¤‚ à¤šà¥‡à¤• à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¹à¤¿à¤‚à¤¦à¥€, à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€ à¤¯à¤¾ à¤¤à¥‡à¤²à¥à¤—à¥ à¤®à¥‡à¤‚ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤‰à¤¤à¥à¤¤à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚à¥¤ à¤ªà¥‚à¤°à¥€ à¤¤à¤°à¤¹ à¤¸à¥‡ à¤®à¥à¤•à¥à¤¤à¥¤",
    analyzeButton: "à¤…à¤­à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚",
    tryFreeButton: "à¤®à¥à¤«à¤¼à¥à¤¤ à¤†à¤œà¤®à¤¾à¤à¤‚ (3 à¤¸à¤‚à¤¦à¥‡à¤¶)",
    analyzeMessage: "à¤à¤• à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚",
    seeHowItWorks: "à¤¯à¤¹ à¤•à¥ˆà¤¸à¥‡ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤¦à¥‡à¤–à¥‡à¤‚",
    aiAssistant: "AI à¤¸à¤¹à¤¾à¤¯à¤•",

    // Features Section
    whySentinelAI: "SentinelAI à¤•à¥à¤¯à¥‹à¤‚?",
    featureSpeed: "3-à¤¸à¥‡à¤•à¤‚à¤¡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    featureSpeedDesc: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¤°à¥‡à¤‚, à¤¤à¥à¤°à¤‚à¤¤ à¤‰à¤¤à¥à¤¤à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚à¥¤ à¤•à¥‹à¤ˆ à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤ªà¤°à¥‡à¤¶à¤¾à¤¨à¥€ à¤¨à¤¹à¥€à¤‚à¥¤",
    featureLanguage: "à¤†à¤ªà¤•à¥€ à¤­à¤¾à¤·à¤¾ à¤¬à¥‹à¤²à¤¤à¤¾ à¤¹à¥ˆ",
    featureLanguageDesc: "à¤¹à¤¿à¤‚à¤¦à¥€, à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€, à¤¤à¥‡à¤²à¥à¤—à¥, à¤‰à¤°à¥à¤¦à¥‚, à¤”à¤° à¤¤à¤®à¤¿à¤² à¤®à¥‡à¤‚ à¤ªà¥‚à¤°à¥à¤£ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£à¥¤ à¤¸à¤°à¤² à¤¶à¤¬à¥à¤¦, à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤µà¥à¤¯à¤¾à¤–à¥à¤¯à¤¾à¥¤",
    featureRural: "à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¨à¤¾à¤¯à¤¾ à¤—à¤¯à¤¾",
    featureRuralDesc: "à¤¸à¤­à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾à¥¤ à¤•à¥‹à¤ˆ à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤œà¥à¤žà¤¾à¤¨ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚à¥¤ à¤¹à¤®à¥‡à¤¶à¤¾ à¤®à¥à¤«à¤¼à¥à¤¤à¥¤",
    featureSecurity: "à¤¨à¤¿à¤œà¥€ à¤”à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤",
    featureSecurityDesc: "à¤†à¤ªà¤•à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¨à¤¿à¤œà¥€ à¤°à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤¹à¤® à¤‰à¤¨à¥à¤¹à¥‡à¤‚ 30 à¤¦à¤¿à¤¨à¥‹à¤‚ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤¹à¤Ÿà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤•à¥‹à¤ˆ à¤Ÿà¥à¤°à¥ˆà¤•à¤¿à¤‚à¤— à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤µà¤¿à¤œà¥à¤žà¤¾à¤ªà¤¨ à¤¨à¤¹à¥€à¤‚à¥¤",

    // Trust Section (badges)
    trustFreeTitle: "100% à¤¸à¤¦à¤¾ à¤®à¥à¤«à¤¼à¥à¤¤",
    trustFreeDesc: "à¤•à¥‹à¤ˆ à¤•à¥à¤°à¥‡à¤¡à¤¿à¤Ÿ à¤•à¤¾à¤°à¥à¤¡ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚à¥¤ à¤•à¤­à¥€à¥¤",
    trustLangsTitle: "5 à¤­à¤¾à¤·à¤¾à¤à¤",
    trustLangsDesc: "à¤¹à¤¿à¤‚à¤¦à¥€, à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€, à¤¤à¥‡à¤²à¥à¤—à¥, à¤‰à¤°à¥à¤¦à¥‚, à¤”à¤° à¤¤à¤®à¤¿à¤² à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤",
    trustIndiaTitle: "à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¨à¤¾à¤¯à¤¾ à¤—à¤¯à¤¾",
    trustIndiaDesc: "à¤­à¤¾à¤°à¤¤à¥€à¤¯ scam à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¿à¤¶à¥‡à¤· à¤°à¥‚à¤ª à¤¸à¥‡ à¤¨à¤¿à¤°à¥à¤®à¤¿à¤¤",
    trustSecurityTitle: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤ªà¤¹à¤²à¥‡",
    trustSecurityDesc: "à¤†à¤ªà¤•à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¹à¤Ÿà¤¾à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ",

    // Statistics Section
    stats1Title: "SMS à¤¸à¥à¤•à¥ˆà¤® à¤ªà¤¹à¤šà¤¾à¤¨à¥‡ à¤—à¤",
    stats2Title: "à¤‰à¤ªà¤¯à¥‹à¤—à¤•à¤°à¥à¤¤à¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤",
    stats3Title: "à¤à¥‚à¤ à¥€ à¤¸à¤•à¤¾à¤°à¤¾à¤¤à¥à¤®à¤•à¤¤à¤¾",

    // CTA Section
    readyToProtect: "à¤–à¥à¤¦ à¤•à¥‹ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥ˆà¤¯à¤¾à¤°?",
    startAnalyzing: "à¤…à¤­à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚",
    noCardRequired: "à¤•à¥‹à¤ˆ à¤•à¥à¤°à¥‡à¤¡à¤¿à¤Ÿ à¤•à¤¾à¤°à¥à¤¡ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚",

    // Footer
    company: "à¤•à¤‚à¤ªà¤¨à¥€",
    privacy: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾",
    terms: "à¤¶à¤°à¥à¤¤à¥‡à¤‚",
    contact: "à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚",
    followUs: "à¤¹à¤®à¥‡à¤‚ à¤«à¥‰à¤²à¥‹ à¤•à¤°à¥‡à¤‚",

    // Auth
    email: "à¤ˆà¤®à¥‡à¤²",
    password: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
    forgotPassword: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤­à¥‚à¤² à¤—à¤?",
    dontHaveAccount: "à¤–à¤¾à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ?",
    alreadyHaveAccount: "à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤–à¤¾à¤¤à¤¾ à¤¹à¥ˆ?",

    // Analysis Page
    enterMessage: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
    selectLanguage: "à¤­à¤¾à¤·à¤¾ à¤šà¥à¤¨à¥‡à¤‚",
    upload: "à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
    cancel: "à¤°à¤¦à¥à¤¦ à¤•à¤°à¥‡à¤‚",
    save: "à¤¸à¤¹à¥‡à¤œà¥‡à¤‚",
    share: "à¤¸à¤¾à¤à¤¾ à¤•à¤°à¥‡à¤‚",

    // Analyze Page
    pasteMessage: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¤°à¥‡à¤‚",
    senderPhone: "à¤ªà¥à¤°à¥‡à¤·à¤• à¤•à¤¾ à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤°",
    messageDate: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥€ à¤¤à¤¾à¤°à¥€à¤–",
    messageTime: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¤¾ à¤¸à¤®à¤¯",
    optional: "à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤•",
    uploadScreenshot: "à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¶à¥‰à¤Ÿ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
    dragDropFile: "à¤…à¤ªà¤¨à¥€ à¤«à¤¼à¤¾à¤‡à¤² à¤¯à¤¹à¤¾à¤‚ à¤–à¥€à¤‚à¤šà¥‡à¤‚ à¤”à¤° à¤›à¥‹à¤¡à¤¼à¥‡à¤‚ à¤¯à¤¾ à¤šà¥à¤¨à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚",
    supportedFormats: "à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤: PNG, JPG (à¤…à¤§à¤¿à¤•à¤¤à¤® 5MB)",
    analyzeNow: "à¤…à¤­à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚",
    analyzing: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤œà¤¾à¤°à¥€ à¤¹à¥ˆ...",
    
    // Analysis Results
    riskAssessment: "à¤œà¥‹à¤–à¤¿à¤® à¤®à¥‚à¤²à¥à¤¯à¤¾à¤‚à¤•à¤¨",
    threatLevel: "à¤–à¤¤à¤°à¥‡ à¤•à¤¾ à¤¸à¥à¤¤à¤°",
    riskPercentage: "{score}% à¤œà¥‹à¤–à¤¿à¤®",
    recommendations: "à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶à¥‡à¤‚",
    immediateSteps: "à¤¤à¥à¤°à¤‚à¤¤ à¤•à¤¦à¤®",
    precautions: "à¤¸à¤¾à¤µà¤§à¤¾à¤¨à¤¿à¤¯à¤¾à¤‚",
    reportPolice: "à¤ªà¥à¤²à¤¿à¤¸ à¤•à¥‹ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚",
    keepAnalysis: "à¤‡à¤¸ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‹ à¤°à¤–à¥‡à¤‚",
    downloadAs: "PDF à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
    printAnalysis: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¥à¤°à¤¿à¤‚à¤Ÿ à¤•à¤°à¥‡à¤‚",

    // History Page
    analysisHistory: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸",
    noAnalysisYet: "à¤…à¤­à¥€ à¤¤à¤• à¤•à¥‹à¤ˆ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤¨à¤¹à¥€à¤‚",
    totalAnalyzed: "à¤•à¥à¤² à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤¿à¤ à¤—à¤",
    highRiskCount: "à¤‰à¤šà¥à¤š à¤œà¥‹à¤–à¤¿à¤®",
    mediumRiskCount: "à¤®à¤§à¥à¤¯à¤® à¤œà¥‹à¤–à¤¿à¤®",
    lowRiskCount: "à¤•à¤® à¤œà¥‹à¤–à¤¿à¤®",
    dateAnalyzed: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥€ à¤¤à¤¾à¤°à¥€à¤–",
    riskScore: "à¤œà¥‹à¤–à¤¿à¤® à¤¸à¥à¤•à¥‹à¤°",
    sender: "à¤ªà¥à¤°à¥‡à¤·à¤•",
    messagePreview: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥‚à¤°à¥à¤µà¤¾à¤µà¤²à¥‹à¤•à¤¨",
    actions: "à¤•à¤¾à¤°à¥à¤¯",
    view: "à¤¦à¥‡à¤–à¥‡à¤‚",
    delete: "à¤¹à¤Ÿà¤¾à¤à¤‚",
    deleteConfirm: "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤‡à¤¸ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‹ à¤¹à¤Ÿà¤¾à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚?",

    // Settings Page
    userSettings: "à¤‰à¤ªà¤¯à¥‹à¤—à¤•à¤°à¥à¤¤à¤¾ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸",
    accountSettings: "à¤–à¤¾à¤¤à¤¾ à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤¸",
    preferences: "à¤µà¤°à¥€à¤¯à¤¤à¤¾à¤à¤‚",
    language: "à¤­à¤¾à¤·à¤¾",
    theme: "à¤¥à¥€à¤®",
    notifications: "à¤¸à¥‚à¤šà¤¨à¤¾à¤à¤‚",
    emailNotifications: "à¤ˆà¤®à¥‡à¤² à¤¸à¥‚à¤šà¤¨à¤¾à¤à¤‚",
    enableNotifications: "à¤‰à¤šà¥à¤š à¤œà¥‹à¤–à¤¿à¤® à¤µà¤¾à¤²à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤ˆà¤®à¥‡à¤² à¤¸à¤¤à¤°à¥à¤•à¤¤à¤¾ à¤¸à¤•à¥à¤·à¤® à¤•à¤°à¥‡à¤‚",
    autoDelete: "à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¹à¤Ÿà¤¾à¤à¤‚",
    deleteAfter: "30 à¤¦à¤¿à¤¨à¥‹à¤‚ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¹à¤Ÿà¤¾à¤à¤‚",
    version: "à¤¸à¤‚à¤¸à¥à¤•à¤°à¤£",

    // Auth Pages
    signInTitle: "SentinelAI à¤®à¥‡à¤‚ à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚",
    createAccount: "à¤–à¤¾à¤¤à¤¾ à¤¬à¤¨à¤¾à¤à¤‚",
    enterEmail: "à¤…à¤ªà¤¨à¤¾ à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
    enterPassword: "à¤…à¤ªà¤¨à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
    confirmPassword: "à¤…à¤ªà¤¨à¥‡ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤•à¥€ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚",
    signIn: "à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚",
    orContinueWith: "à¤¯à¤¾ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚",
    googleSignIn: "Google à¤¸à¥‡ à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚",
    agreeTerms: "à¤®à¥ˆà¤‚ à¤¶à¤°à¥à¤¤à¥‡à¤‚ à¤”à¤° à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤¨à¥€à¤¤à¤¿ à¤¸à¥‡ à¤¸à¤¹à¤®à¤¤ à¤¹à¥‚à¤‚",
    haveAccount: "à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤–à¤¾à¤¤à¤¾ à¤¹à¥ˆ?",
    noAccount: "à¤–à¤¾à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ?",
    resetPassword: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤°à¥€à¤¸à¥‡à¤Ÿ à¤•à¤°à¥‡à¤‚",
    checkEmail: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤°à¥€à¤¸à¥‡à¤Ÿ à¤²à¤¿à¤‚à¤• à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¨à¤¾ à¤ˆà¤®à¥‡à¤² à¤œà¤¾à¤‚à¤šà¥‡à¤‚",

    // Demo Page
    demoMode: "à¤¡à¥‡à¤®à¥‹ à¤®à¥‹à¤¡",
    freeAnalyses: "à¤®à¥à¤«à¤¼à¥à¤¤ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥‡à¤·",
    demoTip: "3 à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤®à¥à¤«à¤¼à¥à¤¤ à¤®à¥‡à¤‚ à¤†à¤œà¤®à¤¾à¤à¤!",
    loginToSave: "à¤…à¤ªà¤¨à¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¥‹ à¤¸à¤¹à¥‡à¤œà¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¥‡à¤‚",

    // Home Page Additional
    buildForIndia: "à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¨à¤¾à¤¯à¤¾",
    protectFamilyAndBusiness: "à¤…à¤ªà¤¨à¥‡ à¤ªà¤°à¤¿à¤µà¤¾à¤° à¤”à¤° à¤µà¥à¤¯à¤µà¤¸à¤¾à¤¯ à¤•à¥‹ SMS à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¸à¥‡ à¤¬à¤šà¤¾à¤à¤‚",
    learnMore: "à¤”à¤° à¤œà¤¾à¤¨à¥‡à¤‚",
    getStarted: "à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚",
    testimonials: "à¤²à¥‹à¤— à¤•à¥à¤¯à¤¾ à¤•à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    seePage: "à¤¹à¤®à¤¾à¤°à¤¾ à¤¦à¥‡à¤–à¥‡à¤‚",
    dataSecurityPage: "à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤ªà¥ƒà¤·à¥à¤ ",
    forDetails: "à¤…à¤§à¤¿à¤• à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤",

    // Footer Additional
    aboutUs: "à¤¹à¤®à¤¾à¤°à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚",
    ourMission: "à¤¹à¤®à¤¾à¤°à¤¾ à¤®à¤¿à¤¶à¤¨ à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤­à¤¾à¤°à¤¤ à¤•à¥‹ SMS à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¸à¥‡ à¤¬à¤šà¤¾à¤¨à¤¾ à¤¹à¥ˆ",
    quickLinks: "à¤¤à¥‡à¤œà¥€ à¤¸à¥‡ à¤²à¤¿à¤‚à¤•",
    resources: "à¤¸à¤‚à¤¸à¤¾à¤§à¤¨",
    fAQ: "à¤…à¤•à¥à¤¸à¤° à¤ªà¥‚à¤›à¥‡ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤ªà¥à¤°à¤¶à¥à¤¨",
    blogPostsAndUpdates: "à¤¬à¥à¤²à¥‰à¤—, à¤ªà¥‹à¤¸à¥à¤Ÿ à¤”à¤° à¤…à¤ªà¤¡à¥‡à¤Ÿ",
    copyright: "à¤¸à¤°à¥à¤µà¤¾à¤§à¤¿à¤•à¤¾à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤",
    builtWith: "à¤¸à¥‡ à¤¬à¤¨à¤¾à¤¯à¤¾",
    
    // Common
    error: "à¤¤à¥à¤°à¥à¤Ÿà¤¿",
    success: "à¤¸à¤«à¤²",
    warning: "à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€",
    info: "à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€",
    confirm: "à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚",
    close: "à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚",
    back: "à¤µà¤¾à¤ªà¤¸",
    next: "à¤†à¤—à¥‡",
    previous: "à¤ªà¤¿à¤›à¤²à¤¾",
    skip: "à¤›à¥‹à¤¡à¤¼à¥‡à¤‚",
    continue: "à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚",
    search: "à¤–à¥‹à¤œà¥‡à¤‚",
    filter: "à¤«à¤¼à¤¿à¤²à¥à¤Ÿà¤°",
    sort: "à¤•à¥à¤°à¤®à¤¬à¤¦à¥à¤§ à¤•à¤°à¥‡à¤‚",
    more: "à¤”à¤°",
    less: "à¤•à¤®",
    show: "à¤¦à¤¿à¤–à¤¾à¤à¤‚",
    hide: "à¤›à¤¿à¤ªà¤¾à¤à¤‚",
    expand: "à¤µà¤¿à¤¸à¥à¤¤à¤¾à¤° à¤•à¤°à¥‡à¤‚",
    collapse: "à¤¢à¤¹à¤¨à¤¾",
    download: "à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
    copy: "à¤•à¥‰à¤ªà¥€ à¤•à¤°à¥‡à¤‚",
    copiedToClipboard: "à¤•à¥à¤²à¤¿à¤ªà¤¬à¥‹à¤°à¥à¤¡ à¤®à¥‡à¤‚ à¤•à¥‰à¤ªà¥€ à¤•à¤¿à¤¯à¤¾",
    tryAgain: "à¤«à¤¿à¤° à¤¸à¥‡ à¤•à¥‹à¤¶à¤¿à¤¶ à¤•à¤°à¥‡à¤‚",
    goHome: "à¤¹à¥‹à¤® à¤ªà¤° à¤œà¤¾à¤à¤‚",

    // About Page
    whyWeBuiltThis: "à¤¹à¤®à¤¨à¥‡ à¤¯à¤¹ à¤•à¥à¤¯à¥‹à¤‚ à¤¬à¤¨à¤¾à¤¯à¤¾",
    aboutIntro: "à¤¹à¤° à¤¹à¤«à¥à¤¤à¥‡, à¤¹à¤œà¤¾à¤°à¥‹à¤‚ à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤­à¤¾à¤°à¤¤à¥€à¤¯à¥‹à¤‚ à¤•à¥‹ à¤à¤¸à¤à¤®à¤à¤¸ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤®à¤¿à¤²à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤œà¥‹ à¤…à¤¸à¤²à¥€ à¤²à¤—à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤²à¥‡à¤•à¤¿à¤¨ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹à¤¤à¥‡à¥¤",
    aboutProblem: "à¤à¤• à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¦à¤¾à¤µà¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤•à¤¿ à¤‰à¤¨à¤•à¤¾ à¤†à¤§à¤¾à¤° à¤¸à¤®à¤¾à¤ªà¥à¤¤ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆà¥¤ à¤à¤• à¤¨à¤•à¤²à¥€ à¤¬à¥ˆà¤‚à¤• à¤¸à¤¤à¤°à¥à¤•à¤¤à¤¾ à¤•à¤¹à¤¤à¥€ à¤¹à¥ˆ à¤•à¤¿ à¤‰à¤¨à¤•à¤¾ à¤–à¤¾à¤¤à¤¾ à¤¬à¤‚à¤¦ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾à¥¤ à¤à¤• à¤²à¥‰à¤Ÿà¤°à¥€ à¤œà¤¿à¤¸à¤®à¥‡à¤‚ à¤µà¥‡ à¤•à¤­à¥€ à¤¶à¤¾à¤®à¤¿à¤² à¤¨à¤¹à¥€à¤‚ à¤¹à¥à¤à¥¤ à¤à¤• à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¯à¥‹à¤œà¤¨à¤¾ à¤œà¥‹ à¤®à¥Œà¤œà¥‚à¤¦ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤",
    aboutProblem2: "à¤¯à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤†à¤¤à¤‚à¤• à¤ªà¥ˆà¤¦à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤•à¤¿à¤ à¤—à¤ à¤¹à¥ˆà¤‚à¥¤ à¤µà¥‡ à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤•-à¤¸à¥à¤¨à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤­à¤¾à¤·à¤¾ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤µà¥‡ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤•à¥€ à¤§à¤®à¤•à¥€ à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤µà¥‡ à¤¤à¤¤à¥à¤•à¤¾à¤² à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤•à¥€ à¤®à¤¾à¤‚à¤— à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
    aboutProblem3: "à¤”à¤° à¤µà¥‡ à¤•à¤¾à¤® à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
    aboutStats: "2023 à¤®à¥‡à¤‚ à¤…à¤•à¥‡à¤²à¥‡, à¤­à¤¾à¤°à¤¤à¥€à¤¯à¥‹à¤‚ à¤¨à¥‡ à¤à¤¸à¤à¤®à¤à¤¸ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¸à¥‡ 1,200 à¤•à¤°à¥‹à¤¡à¤¼ à¤°à¥à¤ªà¤¯à¥‡ à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤–à¥‹ à¤¦à¤¿à¤à¥¤",
    aboutMission: "à¤¹à¤®à¤¨à¥‡ SentinelAI à¤¬à¤¨à¤¾à¤¯à¤¾ à¤•à¥à¤¯à¥‹à¤‚à¤•à¤¿ à¤¹à¤° à¤•à¤¿à¤¸à¥€ à¤•à¥‹ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤•à¥‡ à¤¯à¥‹à¤—à¥à¤¯ à¤¹à¥ˆ, à¤šà¤¾à¤¹à¥‡ à¤µà¤¹ à¤•à¤¹à¥€à¤‚ à¤­à¥€ à¤°à¤¹à¤¤à¤¾ à¤¹à¥‹ à¤¯à¤¾ à¤•à¥Œà¤¨ à¤¸à¥€ à¤­à¤¾à¤·à¤¾ à¤¬à¥‹à¤²à¤¤à¤¾ à¤¹à¥‹à¥¤",
    problemIsReal: "à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤¹à¥ˆ",
    realityOfFraud: "à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ à¤à¤¸à¤à¤®à¤à¤¸ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤•à¥€ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤•à¤¤à¤¾",
    lostToFraud: "2023 à¤®à¥‡à¤‚ à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¸à¥‡ à¤–à¥‹à¤¯à¤¾ à¤¹à¥à¤†",
    cyberCrimeReports: "à¤¸à¤¾à¤‡à¤¬à¤° à¤•à¥à¤°à¤¾à¤‡à¤® à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ",
    victimLiveRural: "à¤ªà¥€à¤¡à¤¼à¤¿à¤¤à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¥‡ à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤®à¥‡à¤‚ à¤°à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    yearOverYearIncrease: "à¤µà¤°à¥à¤·-à¤¦à¤°-à¤µà¤°à¥à¤· à¤¸à¥à¤®à¤¿à¤¶à¤¿à¤‚à¤— à¤®à¥‡à¤‚ à¤µà¥ƒà¤¦à¥à¤§à¤¿",
    averageVictimLoss: "à¤”à¤¸à¤¤ à¤ªà¥€à¤¡à¤¼à¤¿à¤¤ à¤¹à¤¾à¤¨à¤¿ (à¤…à¤•à¥à¤¸à¤° à¤œà¥€à¤µà¤¨ à¤•à¥€ à¤¬à¤šà¤¤)",
    reportedToAuthorities: "à¤•à¥‡à¤µà¤² 23% à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤…à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤¿à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    cannotIdentifyScams: "78% à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥‡ à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨ à¤•à¥€ à¤ªà¤¹à¤šà¤¾à¤¨ à¤¨à¤¹à¥€à¤‚ à¤•à¤° à¤¸à¤•à¤¤à¥‡",
    dontSeekHelp: "43% à¤ªà¥€à¤¡à¤¼à¤¿à¤¤ à¤¶à¤°à¥à¤® à¤•à¥‡ à¤•à¤¾à¤°à¤£ à¤®à¤¦à¤¦ à¤¨à¤¹à¥€à¤‚ à¤²à¥‡à¤¤à¥‡",
    bankingScramsAccount: "à¤¬à¥ˆà¤‚à¤•à¤¿à¤‚à¤— à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤¸à¤­à¥€ à¤à¤¸à¤à¤®à¤à¤¸ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤•à¤¾ 43% à¤¹à¤¿à¤¸à¥à¤¸à¤¾ à¤¹à¥ˆà¤‚",
    moreAlarmingFacts: "à¤…à¤§à¤¿à¤• à¤šà¤¿à¤‚à¤¤à¤¾à¤œà¤¨à¤• à¤¤à¤¥à¥à¤¯",
    whyRuralTargeted: "à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¥‹à¤‚ à¤•à¥‹ à¤•à¥à¤¯à¥‹à¤‚ à¤²à¤•à¥à¤·à¥à¤¯ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ",
    limitedDigitalLiteracy: "à¤¸à¥€à¤®à¤¿à¤¤ à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤¸à¤¾à¤•à¥à¤·à¤°à¤¤à¤¾ à¤”à¤° à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤œà¤¾à¤—à¤°à¥‚à¤•à¤¤à¤¾",
    languageBarriers: "à¤­à¤¾à¤·à¤¾ à¤•à¥€ à¤¬à¤¾à¤§à¤¾à¤à¤‚ (à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥€ à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€ à¤•à¥‡à¤µà¤² à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€ à¤®à¥‡à¤‚)",
    trustInMessages: "à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤•-à¤¦à¤¿à¤–à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶à¥‹à¤‚ à¤ªà¤° à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸",
    lessAccessToEducation: "à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¶à¤¿à¤•à¥à¤·à¤¾ à¤¸à¤‚à¤¸à¤¾à¤§à¤¨à¥‹à¤‚ à¤¤à¤• à¤•à¤® à¤ªà¤¹à¥à¤‚à¤š",
    delayedReportingAllows: "à¤¦à¥‡à¤°à¥€ à¤¸à¥‡ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿà¤¿à¤‚à¤— à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡à¤¬à¤¾à¤œà¥‹à¤‚ à¤•à¥‹ à¤…à¤§à¤¿à¤• à¤¸à¤®à¤¯ à¤¤à¤• à¤•à¤¾à¤® à¤•à¤°à¤¨à¥‡ à¤¦à¥‡à¤¤à¥€ à¤¹à¥ˆ",
    ourSolution: "à¤¹à¤®à¤¾à¤°à¤¾ à¤¸à¤®à¤¾à¤§à¤¾à¤¨",
    simpleAccessibleProtection: "à¤¹à¤° à¤•à¤¿à¤¸à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤°à¤², à¤®à¥à¤«à¥à¤¤ à¤”à¤° à¤¸à¥à¤²à¤­ à¤¸à¥à¤°à¤•à¥à¤·à¤¾",
    threeSecondAnalysis: "3-à¤¸à¥‡à¤•à¤‚à¤¡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    freeAiAnalyzes: "à¤¨à¤¿: à¤¶à¥à¤²à¥à¤• AI à¤œà¥‹ à¤¤à¥à¤°à¤‚à¤¤ à¤¸à¤‚à¤¦à¥‡à¤¶à¥‹à¤‚ à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ",
    worksInYourLanguage: "à¤†à¤ªà¤•à¥€ à¤­à¤¾à¤·à¤¾ à¤®à¥‡à¤‚ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ (à¤…à¤§à¤¿à¤• à¤† à¤°à¤¹à¤¾ à¤¹à¥ˆ)",
    builtForEveryone: "à¤¸à¤­à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¨à¤¾à¤¯à¤¾ à¤—à¤¯à¤¾",
    noTechNeeded: "à¤•à¥‹à¤ˆ à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤œà¥à¤žà¤¾à¤¨ à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ à¤¨à¤¹à¥€à¤‚",
    privacyFirst: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤ªà¤¹à¤²à¥€",
    messagesEncrypted: "à¤¸à¤‚à¤¦à¥‡à¤¶ 30 à¤¦à¤¿à¤¨ à¤¬à¤¾à¤¦ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿ à¤”à¤° à¤¹à¤Ÿà¤¾à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    indiaSpecific: "à¤­à¤¾à¤°à¤¤-à¤µà¤¿à¤¶à¤¿à¤·à¥à¤Ÿ",
    trainedOnIndian: "à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥‡ à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨ à¤ªà¤° à¤ªà¥à¤°à¤¶à¤¿à¤•à¥à¤·à¤¿à¤¤",
    freeForever: "à¤¹à¤®à¥‡à¤¶à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¿: à¤¶à¥à¤²à¥à¤•",
    noAdsTracking: "à¤•à¥‹à¤ˆ à¤µà¤¿à¤œà¥à¤žà¤¾à¤ªà¤¨ à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤Ÿà¥à¤°à¥ˆà¤•à¤¿à¤‚à¤— à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤›à¤¿à¤ªà¥€ à¤¹à¥à¤ˆ à¤²à¤¾à¤—à¤¤ à¤¨à¤¹à¥€à¤‚",
    fourSimpleSteps: "à¤…à¤ªà¤¨à¥‡ à¤†à¤ª à¤•à¥‹ à¤¬à¤šà¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤šà¤¾à¤° à¤¸à¤°à¤² à¤•à¤¦à¤®",
    copyTheSuspicious: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¤¾à¤  à¤•à¥€ à¤ªà¥à¤°à¤¤à¤¿à¤²à¤¿à¤ªà¤¿ à¤¬à¤¨à¤¾à¤à¤‚",
    aiAnalysis: "à¤à¤†à¤ˆ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    weCheck47: "à¤¹à¤® 47 à¤œà¥à¤žà¤¾à¤¤ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    getVerdict: "à¤«à¥ˆà¤¸à¤²à¤¾ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
    clearAnswer: "à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤‰à¤¤à¥à¤¤à¤°: à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤, à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§, à¤¯à¤¾ à¤˜à¥‹à¤Ÿà¤¾à¤²à¤¾",
    takeAction: "à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤•à¤°à¥‡à¤‚",
    simpleStepsInLanguage: "à¤†à¤ªà¤•à¥€ à¤­à¤¾à¤·à¤¾ à¤®à¥‡à¤‚ à¤¸à¤°à¤² à¤•à¤¦à¤®",

    // Help Page
    helpCenter: "à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¥‡à¤‚à¤¦à¥à¤°",
    findAnswers: "SentinelAI à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤ªà¥à¤°à¤¶à¥à¤¨à¥‹à¤‚ à¤•à¥‡ à¤‰à¤¤à¥à¤¤à¤° à¤–à¥‹à¤œà¥‡à¤‚",
    general: "à¤†à¤®",
    howDoesWork: "SentinelAI à¤•à¥ˆà¤¸à¥‡ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ?",
    pasteYourMessage: "à¤…à¤ªà¤¨à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤šà¤¿à¤ªà¤•à¤¾à¤à¤‚, à¤¹à¤®à¤¾à¤°à¤¾ à¤à¤†à¤ˆ à¤‡à¤¸à¥‡ 3 à¤¸à¥‡à¤•à¤‚à¤¡ à¤®à¥‡à¤‚ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ, à¤†à¤ªà¤•à¥‹ à¤…à¤ªà¤¨à¥€ à¤­à¤¾à¤·à¤¾ à¤®à¥‡à¤‚ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤‰à¤¤à¥à¤¤à¤° à¤®à¤¿à¤²à¤¤à¤¾ à¤¹à¥ˆà¥¤",
    isItReallyFree: "à¤•à¥à¤¯à¤¾ à¤¯à¤¹ à¤µà¤¾à¤¸à¥à¤¤à¤µ à¤®à¥‡à¤‚ à¤®à¥à¤«à¥à¤¤ à¤¹à¥ˆ?",
    yesCompletelyfree: "à¤¹à¤¾à¤‚à¥¤ à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤®à¥à¤«à¥à¤¤à¥¤ à¤•à¥‹à¤ˆ à¤•à¥à¤°à¥‡à¤¡à¤¿à¤Ÿ à¤•à¤¾à¤°à¥à¤¡ à¤¨à¤¹à¥€à¤‚, à¤•à¥‹à¤ˆ à¤›à¤¿à¤ªà¥€ à¤²à¤¾à¤—à¤¤ à¤¨à¤¹à¥€à¤‚, à¤¹à¤®à¥‡à¤¶à¤¾à¥¤ à¤…à¤¨à¥à¤¦à¤¾à¤¨ à¤”à¤° à¤¦à¤¾à¤¨ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤µà¤¿à¤¤à¥à¤¤ à¤ªà¥‹à¤·à¤¿à¤¤à¥¤",
    whichLanguagesSupported: "à¤•à¥Œà¤¨ à¤¸à¥€ à¤­à¤¾à¤·à¤¾à¤à¤‚ à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¹à¥ˆà¤‚?",
    hindiEnglishTelugu: "à¤¹à¤¿à¤‚à¤¦à¥€, à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€ à¤”à¤° à¤¤à¥‡à¤²à¥à¤—à¥à¥¤ à¤…à¤§à¤¿à¤• à¤­à¤¾à¤°à¤¤à¥€à¤¯ à¤­à¤¾à¤·à¤¾à¤à¤‚ à¤œà¤²à¥à¤¦ à¤¹à¥€ à¤† à¤°à¤¹à¥€ à¤¹à¥ˆà¤‚à¥¤",
    doINeedAccount: "à¤•à¥à¤¯à¤¾ à¤®à¥à¤à¥‡ à¤à¤• à¤–à¤¾à¤¤à¤¾ à¤¬à¤¨à¤¾à¤¨à¥‡ à¤•à¥€ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¹à¥ˆ?",
    noForTrying: "à¤¡à¥‡à¤®à¥‹ à¤†à¤œà¤¼à¤®à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¨à¤¹à¥€à¤‚à¥¤ à¤…à¤ªà¤¨à¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤•à¥‹ à¤¸à¤¹à¥‡à¤œà¤¨à¥‡ à¤”à¤° à¤ªà¥‚à¤°à¥à¤£ à¤¸à¥à¤µà¤¿à¤§à¤¾à¤“à¤‚ à¤¤à¤• à¤ªà¤¹à¥à¤‚à¤šà¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¤¾à¤‚à¥¤",
    privacySecurity: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤”à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¾",
    isMyDataSafe: "à¤•à¥à¤¯à¤¾ à¤®à¥‡à¤°à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆ?",
    yesWeEncrypt: "à¤¹à¤¾à¤‚à¥¤ à¤¹à¤® à¤¸à¤­à¥€ à¤¸à¤‚à¤¦à¥‡à¤¶à¥‹à¤‚ à¤•à¥‹ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚, 30 à¤¦à¤¿à¤¨ à¤¬à¤¾à¤¦ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¹à¤Ÿà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤”à¤° à¤•à¤¿à¤¸à¥€ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤¾à¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¤¤à¥‡à¥¤",
    canYouRead: "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤®à¥‡à¤°à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¤¢à¤¼ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚?",
    aiAnalyzesAuto: "à¤¹à¤®à¤¾à¤°à¤¾ à¤à¤†à¤ˆ à¤‰à¤¨à¥à¤¹à¥‡à¤‚ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ, à¤²à¥‡à¤•à¤¿à¤¨ à¤•à¥‹à¤ˆ à¤®à¤¾à¤¨à¤µ à¤•à¤­à¥€ à¤†à¤ªà¤•à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¨à¤¹à¥€à¤‚ à¤¦à¥‡à¤–à¤¤à¤¾à¥¤",
    whatDoYouDo: "à¤†à¤ª à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤¿à¤ à¤—à¤ à¤¸à¥à¤•à¥à¤°à¥€à¤¨à¤¶à¥‰à¤Ÿ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤•à¥à¤¯à¤¾ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚?",
    sameAsText: "à¤Ÿà¥‡à¤•à¥à¤¸à¥à¤Ÿ à¤•à¥‡ à¤¸à¤®à¤¾à¤¨ - à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¥‡à¤‚, à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿ à¤•à¤°à¥‡à¤‚, à¤”à¤° 30 à¤¦à¤¿à¤¨ à¤¬à¤¾à¤¦ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¹à¤Ÿà¤¾à¤à¤‚à¥¤ à¤•à¥‹à¤ˆ à¤®à¤¾à¤¨à¤µ à¤ªà¤¹à¥à¤‚à¤š à¤¨à¤¹à¥€à¤‚à¥¤",
    usingSentinelAI: "SentinelAI à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤¨à¤¾",
    howAccurate: "à¤ªà¤¹à¤šà¤¾à¤¨ à¤•à¤¿à¤¤à¤¨à¥€ à¤¸à¤Ÿà¥€à¤• à¤¹à¥ˆ?",
    continuouslyImproving: "à¤¹à¤® à¤²à¤—à¤¾à¤¤à¤¾à¤° à¤¸à¥à¤§à¤¾à¤° à¤•à¤° à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤¹à¤®à¤¾à¤°à¤¾ à¤à¤†à¤ˆ à¤­à¤¾à¤°à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¤¿à¤¶à¤¿à¤·à¥à¤Ÿ à¤¹à¤œà¤¾à¤°à¥‹à¤‚ à¤œà¥à¤žà¤¾à¤¤ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥‡ à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨ à¤ªà¤° à¤ªà¥à¤°à¤¶à¤¿à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆà¥¤",
    whatIfSays: "à¤…à¤—à¤° à¤¯à¤¹ à¤•à¤¹à¤¤à¤¾ à¤¹à¥ˆ à¤•à¤¿ à¤®à¥‡à¤°à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆ à¤²à¥‡à¤•à¤¿à¤¨ à¤®à¥ˆà¤‚ à¤…à¤­à¥€ à¤­à¥€ à¤…à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤¹à¥‚à¤‚?",
    alwaysTrustInstinct: "à¤¹à¤®à¥‡à¤¶à¤¾ à¤…à¤ªà¤¨à¥€ à¤ªà¥à¤°à¤µà¥ƒà¤¤à¥à¤¤à¤¿ à¤ªà¤° à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤ à¤…à¤—à¤° à¤•à¥à¤› à¤—à¤²à¤¤ à¤²à¤—à¤¤à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤¨ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤•à¥‹à¤ˆ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚à¥¤",
    canIReport: "à¤•à¥à¤¯à¤¾ à¤®à¥ˆà¤‚ à¤—à¤²à¤¤ à¤ªà¤°à¤¿à¤£à¤¾à¤®à¥‹à¤‚ à¤•à¥€ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥‚à¤‚?",
    yesPleaseUse: "à¤¹à¤¾à¤‚, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤¸à¤¾ à¤•à¤°à¥‡à¤‚à¥¤ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤®à¥‡à¤‚ à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¬à¤Ÿà¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚ à¤¤à¤¾à¤•à¤¿ à¤¹à¤®à¥‡à¤‚ à¤¸à¥à¤§à¤¾à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤®à¤¿à¤² à¤¸à¤•à¥‡à¥¤",
    whatIfClickedLink: "à¤…à¤—à¤° à¤®à¥ˆà¤‚ à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤¹à¥€ à¤à¤• à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥€ à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤° à¤šà¥à¤•à¤¾ à¤¹à¥‚à¤‚ à¤¤à¥‹ à¤•à¥à¤¯à¤¾ à¤•à¤°à¥‚à¤‚?",
    actImmediately: "à¤¤à¥à¤°à¤‚à¤¤ à¤•à¤¾à¤°à¥à¤¯ à¤•à¤°à¥‡à¤‚: (1) à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤¸à¥‡ à¤¡à¤¿à¤¸à¥à¤•à¤¨à¥‡à¤•à¥à¤Ÿ à¤•à¤°à¥‡à¤‚, (2) à¤–à¥‹à¤²à¥€ à¤—à¤ˆ à¤¸à¤¾à¤‡à¤Ÿ à¤ªà¤° à¤•à¥‹à¤ˆ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¨ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚, (3) à¤…à¤ªà¤¨à¥‡ à¤¬à¥ˆà¤‚à¤• à¤•à¥€ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨ à¤•à¥‹ à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚, (4) à¤¸à¤­à¥€ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¥‡à¤‚, (5) à¤…à¤ªà¤¨à¥‡ à¤–à¤¾à¤¤à¥‹à¤‚ à¤•à¥€ 48 à¤˜à¤‚à¤Ÿà¥‡ à¤¨à¤¿à¤—à¤°à¤¾à¤¨à¥€ à¤•à¤°à¥‡à¤‚, (6) à¤¸à¤¾à¤‡à¤¬à¤° à¤•à¥à¤°à¤¾à¤‡à¤® à¤•à¥‹ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚: 1930",
    canIUseWhatsapp: "à¤•à¥à¤¯à¤¾ à¤®à¥ˆà¤‚ à¤‡à¤¸à¥‡ à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª à¤¯à¤¾ à¤…à¤¨à¥à¤¯ à¤à¤ª à¤¸à¤‚à¤¦à¥‡à¤¶à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥‚à¤‚?",
    yesPasteAnyText: "à¤¹à¤¾à¤‚, à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤ªà¥à¤²à¥‡à¤Ÿà¤«à¥‰à¤°à¥à¤® à¤¸à¥‡ à¤•à¥‹à¤ˆ à¤­à¥€ à¤ªà¤¾à¤  à¤¸à¤‚à¤¦à¥‡à¤¶ à¤šà¤¿à¤ªà¤•à¤¾à¤à¤‚ - à¤à¤¸à¤à¤®à¤à¤¸, à¤µà¥à¤¹à¤¾à¤Ÿà¥à¤¸à¤à¤ª, à¤Ÿà¥‡à¤²à¥€à¤—à¥à¤°à¤¾à¤®, à¤«à¥‡à¤¸à¤¬à¥à¤•, à¤ˆà¤®à¥‡à¤²à¥¤",
    stillHaveQuestions: "à¤…à¤­à¥€ à¤­à¥€ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤¹à¥ˆà¤‚?",
    emailUs: "à¤¹à¤®à¥‡à¤‚ à¤ˆà¤®à¥‡à¤² à¤•à¤°à¥‡à¤‚: support@sentinelai.com",
    responseTime: "à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¸à¤®à¤¯: à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° 24 à¤˜à¤‚à¤Ÿà¥‡ à¤•à¥‡ à¤­à¥€à¤¤à¤°",

    // Contact Page
    getTouchTitle: "à¤¸à¤‚à¤ªà¤°à¥à¤• à¤®à¥‡à¤‚ à¤†à¤à¤‚",
    haveQuestions: "à¤¸à¤µà¤¾à¤² à¤¹à¥ˆà¤‚? à¤¹à¤® à¤†à¤ªà¤•à¥€ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤¯à¤¹à¤¾à¤ à¤¹à¥ˆà¤‚à¥¤ à¤¹à¤®à¥‡à¤‚ à¤à¤• à¤¸à¤‚à¤¦à¥‡à¤¶ à¤­à¥‡à¤œà¥‡à¤‚ à¤”à¤° à¤¹à¤® 24 à¤˜à¤‚à¤Ÿà¥‡ à¤•à¥‡ à¤­à¥€à¤¤à¤° à¤œà¤µà¤¾à¤¬ à¤¦à¥‡à¤‚à¤—à¥‡à¥¤",
    fullName: "à¤ªà¥‚à¤°à¤¾ à¤¨à¤¾à¤® *",
    yourName: "à¤†à¤ªà¤•à¤¾ à¤¨à¤¾à¤®",
    emailAddress: "à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾ *",
    youAtExample: "à¤†à¤ª@à¤‰à¤¦à¤¾à¤¹à¤°à¤£.à¤•à¥‰à¤®",
    subject: "à¤µà¤¿à¤·à¤¯",
    selectSubject: "à¤à¤• à¤µà¤¿à¤·à¤¯ à¤šà¥à¤¨à¥‡à¤‚",
    generalInquiry: "à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤ªà¥‚à¤›à¤¤à¤¾à¤›",
    technicalSupport: "à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤¸à¤®à¤°à¥à¤¥à¤¨",
    reportFalsePositive: "à¤à¥‚à¤ à¥€ à¤¸à¤•à¤¾à¤°à¤¾à¤¤à¥à¤®à¤• à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚",
    reportScam: "à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¥€ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚",
    partnershipOpportunity: "à¤¸à¤¾à¤à¥‡à¤¦à¤¾à¤°à¥€ à¤•à¤¾ à¤…à¤µà¤¸à¤°",
    pressMedia: "à¤ªà¥à¤°à¥‡à¤¸/à¤®à¥€à¤¡à¤¿à¤¯à¤¾ à¤ªà¥‚à¤›à¤¤à¤¾à¤›",
    other: "à¤…à¤¨à¥à¤¯",
    messageLabel: "à¤¸à¤‚à¤¦à¥‡à¤¶ *",
    howCanWeHelp: "à¤¹à¤® à¤†à¤ªà¤•à¥€ à¤•à¥ˆà¤¸à¥‡ à¤®à¤¦à¤¦ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚?",
    sendMessage: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤­à¥‡à¤œà¥‡à¤‚",
    responseTimeContact: "à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° 24 à¤˜à¤‚à¤Ÿà¥‡ à¤•à¥‡ à¤­à¥€à¤¤à¤°",
    mondayFriday: "à¤¸à¥‹à¤®à¤µà¤¾à¤°-à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°, à¤¸à¥à¤¬à¤¹ 9 à¤¬à¤œà¥‡ - à¤¶à¤¾à¤® 6 à¤¬à¤œà¥‡ IST",
    alreadyBeenScammed: "à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤¹à¥€ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤•à¤¾ à¤¶à¤¿à¤•à¤¾à¤° à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆ?",
    dontWaitReport: "à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚ - à¤¤à¥à¤°à¤‚à¤¤ à¤…à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚:",
    cyberCrimeHelpline: "à¤¸à¤¾à¤‡à¤¬à¤° à¤•à¥à¤°à¤¾à¤‡à¤® à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨: 1930",
    available24By7: "24/7 à¤‰à¤ªà¤²à¤¬à¥à¤§ â€¢ à¤¤à¥à¤°à¤‚à¤¤ à¤…à¤ªà¤¨à¥‡ à¤¬à¥ˆà¤‚à¤• à¤•à¥‹ à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚",
    connectWithUs: "à¤¹à¤®à¤¾à¤°à¥‡ à¤¸à¤¾à¤¥ à¤œà¥à¤¡à¤¼à¥‡à¤‚",

    // FAQ Page
    faqTitle: "à¤…à¤•à¥à¤¸à¤° à¤ªà¥‚à¤›à¥‡ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤ªà¥à¤°à¤¶à¥à¤¨",
    whatIsSmishing: "à¤¸à¥à¤®à¤¿à¤¶à¤¿à¤‚à¤— à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ à¤”à¤° à¤¯à¤¹ à¤•à¥ˆà¤¸à¥‡ à¤•à¤¾à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ?",
    smishingDef: "à¤¸à¥à¤®à¤¿à¤¶à¤¿à¤‚à¤— à¤à¤¸à¤à¤®à¤à¤¸ à¤«à¤¿à¤¶à¤¿à¤‚à¤— à¤¹à¥ˆ - à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤µà¤¾à¤²à¥‡ à¤ªà¤¾à¤  à¤¸à¤‚à¤¦à¥‡à¤¶ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¯à¤¾ à¤ªà¥ˆà¤¸à¥‡ à¤šà¥‹à¤°à¥€ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤•à¤¿à¤ à¤—à¤à¥¤ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡à¤¬à¤¾à¤œà¥€ à¤¬à¥ˆà¤‚à¤•, à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤à¤œà¥‡à¤‚à¤¸à¤¿à¤¯à¥‹à¤‚ à¤¯à¤¾ à¤•à¤‚à¤ªà¤¨à¤¿à¤¯à¥‹à¤‚ à¤•à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤°à¥‚à¤ªà¤£ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤¤à¤¾à¤•à¤¿ à¤†à¤ªà¤•à¥‹ à¤¦à¥à¤°à¥à¤­à¤¾à¤µà¤¨à¤¾à¤ªà¥‚à¤°à¥à¤£ à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¤¨à¥‡ à¤¯à¤¾ à¤¸à¤‚à¤µà¥‡à¤¦à¤¨à¤¶à¥€à¤² à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤¾à¤à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤Ÿà¥à¤°à¤¿à¤• à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¥‡à¥¤",
    howAccurateIs: "à¤†à¤ªà¤•à¥€ à¤ªà¤¹à¤šà¤¾à¤¨ à¤ªà¥à¤°à¤£à¤¾à¤²à¥€ à¤•à¤¿à¤¤à¤¨à¥€ à¤¸à¤Ÿà¥€à¤• à¤¹à¥ˆ?",
    accuracyDef: "à¤¹à¤®à¤¾à¤°à¤¾ à¤à¤†à¤ˆ 98% à¤¸à¤Ÿà¥€à¤•à¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¹à¤® à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤¿à¤ à¤—à¤ à¤¨à¤ˆ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¤à¤•à¤¨à¥€à¤•à¥‹à¤‚ à¤ªà¤° à¤²à¤—à¤¾à¤¤à¤¾à¤° à¤ªà¥à¤°à¤¶à¤¿à¤•à¥à¤·à¤£ à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
    isReallyFree: "à¤•à¥à¤¯à¤¾ à¤¯à¤¹ à¤¸à¥‡à¤µà¤¾ à¤µà¤¾à¤¸à¥à¤¤à¤µ à¤®à¥‡à¤‚ à¤®à¥à¤«à¥à¤¤ à¤¹à¥ˆ?",
    freeAnswer: "à¤¹à¤¾à¤‚! SentinelAI à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤¨à¤¿: à¤¶à¥à¤²à¥à¤• à¤¹à¥ˆà¥¤ à¤¹à¤®à¤¾à¤°à¤¾ à¤®à¤¿à¤¶à¤¨ à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤­à¤¾à¤°à¤¤ à¤•à¥‹ à¤à¤¸à¤à¤®à¤à¤¸ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤¸à¥‡ à¤¬à¤šà¤¾à¤¨à¤¾ à¤¹à¥ˆ, à¤²à¤¾à¤­ à¤¨à¤¹à¥€à¤‚à¥¤",
    languagesSupported: "à¤•à¥Œà¤¨ à¤¸à¥€ à¤­à¤¾à¤·à¤¾à¤à¤‚ à¤¸à¤®à¤°à¥à¤¥à¤¿à¤¤ à¤¹à¥ˆà¤‚?",
    languagesAnswer: "à¤¹à¤® à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€, à¤¹à¤¿à¤‚à¤¦à¥€ (à¤¹à¤¿à¤‚à¤¦à¥€), à¤”à¤° à¤¤à¥‡à¤²à¥à¤—à¥ (à°¤à±†à°²à±à°—à±) à¤•à¤¾ à¤¸à¤®à¤°à¥à¤¥à¤¨ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤…à¤§à¤¿à¤• à¤•à¥à¤·à¥‡à¤¤à¥à¤°à¥€à¤¯ à¤­à¤¾à¤·à¤¾à¤à¤‚ à¤œà¤²à¥à¤¦ à¤¹à¥€ à¤† à¤°à¤¹à¥€ à¤¹à¥ˆà¤‚!",
    dataSecurePrivate: "à¤•à¥à¤¯à¤¾ à¤®à¥‡à¤°à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤”à¤° à¤¨à¤¿à¤œà¥€ à¤¹à¥ˆ?",
    dataSecureAnswer: "à¤¬à¤¿à¤²à¥à¤•à¥à¤²à¥¤ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿ à¤•à¤¿à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤¿à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤”à¤° 30 à¤¦à¤¿à¤¨ à¤¬à¤¾à¤¦ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¹à¤Ÿà¤¾à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤¹à¤® à¤•à¤­à¥€ à¤†à¤ªà¤•à¤¾ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤¾à¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¤¤à¥‡à¥¤",
    whatIfFellForScam: "à¤…à¤—à¤° à¤®à¥ˆà¤‚ à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤¹à¥€ à¤à¤• à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤®à¥‡à¤‚ à¤ªà¤¡à¤¼ à¤—à¤¯à¤¾ à¤¹à¥‚à¤‚ à¤¤à¥‹ à¤®à¥à¤à¥‡ à¤•à¥à¤¯à¤¾ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤?",
    scamReaction: "à¤¤à¥à¤°à¤‚à¤¤ à¤•à¤¾à¤°à¥à¤¯ à¤•à¤°à¥‡à¤‚: 1) à¤…à¤ªà¤¨à¥‡ à¤–à¤¾à¤¤à¥‹à¤‚ à¤•à¥‹ à¤«à¥à¤°à¥€à¤œ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤ªà¤¨à¥‡ à¤¬à¥ˆà¤‚à¤• à¤•à¥‹ à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚, 2) à¤¸à¤¾à¤‡à¤¬à¤° à¤•à¥à¤°à¤¾à¤‡à¤® à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨ 1930 à¤•à¥‹ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚, 3) à¤¸à¤­à¥€ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¥‡à¤‚, 4) cybercrime.gov.in à¤ªà¤° à¤¶à¤¿à¤•à¤¾à¤¯à¤¤ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",

    // Demo Page
    demoIntro: "à¤¯à¤¹ à¤à¤• à¤¨à¤®à¥‚à¤¨à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤à¤• à¤¡à¥‡à¤®à¥‹ à¤¹à¥ˆà¥¤ à¤…à¤ªà¤¨à¥‡ à¤¸à¥à¤µà¤¯à¤‚ à¤•à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶à¥‹à¤‚ à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤‡à¤¨ à¤…à¤ª à¤•à¤°à¥‡à¤‚à¥¤",
    signUpFree: "à¤¨à¤¿: à¤¶à¥à¤²à¥à¤• à¤¸à¤¾à¤‡à¤¨ à¤…à¤ª à¤•à¤°à¥‡à¤‚",
    tryDemoAnalysis: "à¤¡à¥‡à¤®à¥‹ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤†à¤œà¤®à¤¾à¤à¤‚",
    demoAnalysesRemaining: "à¤¡à¥‡à¤®à¥‹ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¬à¤¾à¤•à¥€ à¤¹à¥ˆà¥¤ à¤…à¤¸à¥€à¤®à¤¿à¤¤ à¤ªà¤¹à¥à¤‚à¤š à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤‡à¤¨ à¤…à¤ª à¤•à¤°à¥‡à¤‚à¥¤",
    sendersNumber: "à¤ªà¥à¤°à¥‡à¤·à¤• à¤•à¤¾ à¤¨à¤‚à¤¬à¤°",
    messageText: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¤¾à¤ ",
    sampleMessage: "à¤œà¤°à¥‚à¤°à¥€: à¤†à¤ªà¤•à¤¾ à¤à¤¸à¤¬à¥€à¤†à¤ˆ à¤–à¤¾à¤¤à¤¾ à¤•à¥‡à¤µà¤¾à¤ˆà¤¸à¥€ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‡ à¤•à¤¾à¤°à¤£ à¤…à¤¸à¥à¤¥à¤¾à¤¯à¥€ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¨à¤¿à¤²à¤‚à¤¬à¤¿à¤¤ à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¹à¤¾à¤‚ à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚ à¤¤à¥à¤°à¤‚à¤¤ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤: bit.ly/sbi-kyc-2024 à¤¯à¤¾ à¤†à¤ªà¤•à¤¾ à¤–à¤¾à¤¤à¤¾ 24 à¤˜à¤‚à¤Ÿà¥‡ à¤®à¥‡à¤‚ à¤¬à¤‚à¤¦ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾à¥¤ à¤—à¥à¤°à¤¾à¤¹à¤• à¤¦à¥‡à¤–à¤­à¤¾à¤²: 1800-XXXX",
    analyzingContent: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤•à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ...",
    checkingSender: "à¤ªà¥à¤°à¥‡à¤·à¤• à¤•à¥€ à¤ªà¥à¤°à¤¤à¤¿à¤·à¥à¤ à¤¾ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆ...",
    scanningMalicious: "à¤¦à¥à¤°à¥à¤­à¤¾à¤µà¤¨à¤¾à¤ªà¥‚à¤°à¥à¤£ à¤²à¤¿à¤‚à¤• à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¥à¤•à¥ˆà¤¨ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ...",
    generatingReport: "à¤œà¥‹à¤–à¤¿à¤® à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤¤à¥ˆà¤¯à¤¾à¤° à¤•à¥€ à¤œà¤¾ à¤°à¤¹à¥€ à¤¹à¥ˆ...",
    likelySmishing: "à¤¯à¤¹ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¸à¤‚à¤­à¤µà¤¤à¤ƒ à¤à¤• à¤¸à¥à¤®à¤¿à¤¶à¤¿à¤‚à¤— à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤¹à¥ˆ",
    doNotClickLinksDemo: "à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤¨ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚",
    suspiciousLinkDetectedDemo: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤²à¤¿à¤‚à¤• à¤•à¤¾ à¤ªà¤¤à¤¾ à¤šà¤²à¤¾",
    containsShortened: "à¤¸à¤‚à¤•à¥à¤·à¤¿à¤ªà¥à¤¤ à¤¯à¥‚à¤†à¤°à¤à¤² (bit.ly) à¤¯à¥à¤•à¥à¤¤",
    urgencyTacticsDemo: "à¤¤à¤¤à¥à¤•à¤¾à¤² à¤°à¤£à¤¨à¥€à¤¤à¤¿",
    createsArtificial: "à¤•à¥ƒà¤¤à¥à¤°à¤¿à¤® à¤¸à¤®à¤¯ à¤¦à¤¬à¤¾à¤µ à¤¬à¤¨à¤¾à¤¤à¤¾ à¤¹à¥ˆ (24 à¤˜à¤‚à¤Ÿà¥‡)",
    bankImpersonation: "à¤¬à¥ˆà¤‚à¤• à¤ªà¥à¤°à¤¤à¤¿à¤°à¥‚à¤ªà¤£",
    pretendsSbi: "à¤à¤¸à¤¬à¥€à¤†à¤ˆ à¤¸à¥‡ à¤¹à¥‹à¤¨à¥‡ à¤•à¤¾ à¤¦à¤¾à¤µà¤¾ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ",
    kycScamPattern: "à¤•à¥‡à¤µà¤¾à¤ˆà¤¸à¥€ à¤˜à¥‹à¤Ÿà¤¾à¤²à¥‡ à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨",
    matchesKnownKyc: "à¤œà¥à¤žà¤¾à¤¤ à¤•à¥‡à¤µà¤¾à¤ˆà¤¸à¥€ à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€ à¤ªà¥ˆà¤Ÿà¤°à¥à¤¨ à¤¸à¥‡ à¤®à¥‡à¤² à¤–à¤¾à¤¤à¤¾ à¤¹à¥ˆ",
    analysisCompleteDemo: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤ªà¥‚à¤°à¥à¤£",
    riskLevelDemo: "à¤œà¥‹à¤–à¤¿à¤® à¤¸à¥à¤¤à¤°: à¤‰à¤šà¥à¤š (92/100)",

    // Terms Page
    termsOfService: "à¤¸à¥‡à¤µà¤¾ à¤•à¥€ à¤¶à¤°à¥à¤¤à¥‡à¤‚",
    termsLastUpdated: "à¤…à¤‚à¤¤à¤¿à¤® à¤…à¤¦à¥à¤¯à¤¤à¤¨: 7 à¤œà¤¨à¤µà¤°à¥€, 2026",

    // Privacy Page
    privacyPolicy: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤¨à¥€à¤¤à¤¿",
    privacyLastUpdated: "à¤…à¤‚à¤¤à¤¿à¤® à¤…à¤¦à¥à¤¯à¤¤à¤¨: 7 à¤œà¤¨à¤µà¤°à¥€, 2026",

    // Data Security Page
    dataSecurity: "à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¾",
    securityLastUpdated: "à¤…à¤‚à¤¤à¤¿à¤® à¤…à¤¦à¥à¤¯à¤¤à¤¨: 7 à¤œà¤¨à¤µà¤°à¥€, 2026",
    endToEndEncryption: "à¤…à¤‚à¤¤-à¤¸à¥‡-à¤…à¤‚à¤¤ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤¶à¤¨",
    tlsDescription: "SentinelAI à¤¸à¥‡ à¤”à¤° à¤¸à¥‡ à¤¸à¤­à¥€ à¤¡à¥‡à¤Ÿà¤¾ TLS 1.3 à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤•à¥‡ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤Ÿ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ",
    secureInfrastructure: "à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¬à¥à¤¨à¤¿à¤¯à¤¾à¤¦à¥€ à¤¢à¤¾à¤‚à¤šà¤¾",
    socCompliant: "à¤¹à¤®à¤¾à¤°à¥‡ à¤¸à¤°à¥à¤µà¤° à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ SOC 2 à¤…à¤¨à¥à¤ªà¤¾à¤²à¤¨ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¥‡à¤‚à¤Ÿà¤° à¤®à¥‡à¤‚ à¤¹à¥‹à¤¸à¥à¤Ÿ à¤•à¤¿à¤ à¤œà¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    privacyByDesign: "à¤¡à¤¿à¤œà¤¼à¤¾à¤‡à¤¨ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾",
    collectEssentialOnly: "à¤¹à¤® à¤•à¥‡à¤µà¤² à¤†à¤µà¤¶à¥à¤¯à¤• à¤¡à¥‡à¤Ÿà¤¾ à¤à¤•à¤¤à¥à¤° à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤”à¤° à¤œà¤¹à¤¾à¤‚ à¤¸à¤‚à¤­à¤µ à¤¹à¥‹ à¤—à¥à¤®à¤¨à¤¾à¤® à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    accessControls: "à¤ªà¤¹à¥à¤‚à¤š à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£",
    roleBasedAccess: "à¤•à¤ à¥‹à¤° à¤­à¥‚à¤®à¤¿à¤•à¤¾-à¤†à¤§à¤¾à¤°à¤¿à¤¤ à¤ªà¤¹à¥à¤‚à¤š à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£ à¤†à¤ªà¤•à¥‡ à¤¡à¥‡à¤Ÿà¤¾ à¤•à¥€ à¤†à¤‚à¤¤à¤°à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚",
    encryptionPractices: "à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤¶à¤¨ à¤ªà¥à¤°à¤¥à¤¾à¤à¤‚",
    industryLeadingStandards: "à¤¹à¤® à¤‰à¤¦à¥à¤¯à¥‹à¤—-à¤…à¤—à¥à¤°à¤£à¥€ à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤¶à¤¨ à¤®à¤¾à¤¨à¤•à¥‹à¤‚ à¤•à¥‹ à¤¨à¤¿à¤¯à¥‹à¤œà¤¿à¤¤ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚:",
    tlsInTransit: "à¤¸à¤­à¥€ à¤¡à¥‡à¤Ÿà¤¾-à¤‡à¤¨-à¤Ÿà¥à¤°à¤¾à¤‚à¤œà¤¿à¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤Ÿà¥€à¤à¤²à¤à¤¸ 1.3",
    aes256Rest: "à¤†à¤°à¤¾à¤® à¤ªà¤° à¤¡à¥‡à¤Ÿà¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤à¤ˆà¤à¤¸-256 à¤à¤¨à¥à¤•à¥à¤°à¤¿à¤ªà¥à¤¶à¤¨",
    secureKeyManagement: "à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤°à¥‹à¤Ÿà¥‡à¤¶à¤¨ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤•à¥à¤‚à¤œà¥€ à¤ªà¥à¤°à¤¬à¤‚à¤§à¤¨",
    perfectForward: "à¤¸à¤‚à¤šà¤¾à¤° à¤¸à¤¤à¥à¤°à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤—à¥‡ à¤•à¥€ à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤ªà¤°à¤¿à¤ªà¥‚à¤°à¥à¤£",
    complianceStandards: "à¤…à¤¨à¥à¤ªà¤¾à¤²à¤¨ à¤®à¤¾à¤¨à¤•",
    adheres: "SentinelAI à¤¨à¤¿à¤®à¥à¤¨ à¤•à¤¾ à¤ªà¤¾à¤²à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ:",
    itAct: "à¤¸à¥‚à¤šà¤¨à¤¾ à¤ªà¥à¤°à¥Œà¤¦à¥à¤¯à¥‹à¤—à¤¿à¤•à¥€ à¤…à¤§à¤¿à¤¨à¤¿à¤¯à¤®, 2000 (à¤­à¤¾à¤°à¤¤)",
    personalDataProtection: "à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤¡à¥‡à¤Ÿà¤¾ à¤¸à¤‚à¤°à¤•à¥à¤·à¤£ à¤¦à¤¿à¤¶à¤¾à¤¨à¤¿à¤°à¥à¤¦à¥‡à¤¶",
  },
  telugu: {
    // Risk Score Section
    riskLevel: "à°ªà±à°°à°®à°¾à°¦ à°¸à±à°¥à°¾à°¯à°¿",
    high: "à°…à°§à°¿à°•à°‚",
    medium: "à°®à°§à±à°¯à°¸à±à°¥à°‚",
    low: "à°¤à°•à±à°•à±à°µ",
    confidence: "à°¨à°®à±à°®à°•à°‚",
    
    // Verdict Section
    verdict: "à°¤à±€à°°à±à°ªà±",
    recommendedAction: "à°®à±€à°°à± à°à°®à°¿ à°šà±‡à°¯à°¾à°²à°¿",
    verdictHigh: "à°ˆ à°¸à°‚à°¦à±‡à°¶à°‚ à°¸à±à°®à°¿à°·à°¿à°‚à°—à± à°ªà±à°°à°¯à°¤à±à°¨à°‚ à°•à°¾à°µà°šà±à°šà±",
    verdictMedium: "à°ˆ à°¸à°‚à°¦à±‡à°¶à°‚à°²à±‹ à°•à±Šà°¨à±à°¨à°¿ à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ à°²à°•à±à°·à°£à°¾à°²à± à°‰à°¨à±à°¨à°¾à°¯à°¿",
    verdictLow: "à°ˆ à°¸à°‚à°¦à±‡à°¶à°‚ à°šà°Ÿà±à°Ÿà°¬à°¦à±à°§à°‚à°—à°¾ à°•à°¨à°¿à°ªà°¿à°¸à±à°¤à±‹à°‚à°¦à°¿",
    actionHigh: "à°²à°¿à°‚à°•à±â€Œà°²à°ªà±ˆ à°•à±à°²à°¿à°•à± à°šà±‡à°¯à°µà°¦à±à°¦à± à°²à±‡à°¦à°¾ à°µà±à°¯à°•à±à°¤à°¿à°—à°¤ à°¸à°®à°¾à°šà°¾à°°à°‚ à°ªà°‚à°šà±à°•à±‹à°µà°¦à±à°¦à±",
    actionMedium: "à°¸à±à°ªà°‚à°¦à°¿à°‚à°šà±‡ à°®à±à°‚à°¦à± à°…à°§à°¿à°•à°¾à°°à°¿à°• à°›à°¾à°¨à±†à°²à±à°¸à± à°¦à±à°µà°¾à°°à°¾ à°ªà°‚à°ªà°¿à°¨à°µà°¾à°°à°¿à°¨à°¿ à°§à±ƒà°µà±€à°•à°°à°¿à°‚à°šà°‚à°¡à°¿",
    actionLow: "à°•à±Šà°¨à°¸à°¾à°—à°¡à°‚ à°¸à±à°°à°•à±à°·à°¿à°¤à°‚, à°•à°¾à°¨à±€ à°Žà°²à±à°²à°ªà±à°ªà±à°¡à±‚ à°…à°ªà±à°°à°®à°¤à±à°¤à°‚à°—à°¾ à°‰à°‚à°¡à°‚à°¡à°¿",
    
    // Threat Section (risk-conditional titles)
    whyDangerous: "à°‡à°¦à°¿ à°ªà±à°°à°®à°¾à°¦à°•à°°à°‚ à°Žà°‚à°¦à±à°•à±?",
    proceedWithCaution: "à°œà°¾à°—à±à°°à°¤à±à°¤à°—à°¾ à°•à±Šà°¨à°¸à°¾à°—à°‚à°¡à°¿",
    thingsToNote: "à°—à°®à°¨à°¿à°‚à°šà°µà°²à°¸à°¿à°¨ à°µà°¿à°·à°¯à°¾à°²à±",
    threatIndicators: "à°¬à±†à°¦à°¿à°°à°¿à°‚à°ªà± à°¸à±‚à°šà°¿à°•à°²à± à°•à°¨à±à°—à±Šà°¨à°¬à°¡à±à°¡à°¾à°¯à°¿",
    suspiciousLinkDetected: "à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ à°²à°¿à°‚à°•à± à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°¿à°‚à°¦à°¿",
    suspiciousLinkDesc: "à°¸à°‚à°¦à±‡à°¶à°‚à°²à±‹ à°šà°¿à°¨à±à°¨à°¦à°¿ à°²à±‡à°¦à°¾ à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ URL à°‰à°‚à°¦à°¿",
    urgencyTactics: "à°†à°µà°¶à±à°¯à°•à°¤ à°µà±à°¯à±‚à°¹à°¾à°²à± à°•à°¨à±à°—à±Šà°¨à°¬à°¡à±à°¡à°¾à°¯à°¿",
    urgencyTacticsDesc: "à°¸à°‚à°¦à±‡à°¶à°‚ à°•à±ƒà°¤à±à°°à°¿à°® à°¸à°®à°¯ à°’à°¤à±à°¤à°¿à°¡à°¿à°¨à°¿ à°¸à±ƒà°·à±à°Ÿà°¿à°¸à±à°¤à±à°‚à°¦à°¿",
    infoRequest: "à°¸à°®à°¾à°šà°¾à°° à°…à°­à±à°¯à°°à±à°¥à°¨ (à°ªà±à°°à°®à°¾à°¦ à°¸à°‚à°•à±‡à°¤à°‚)",
    infoRequestDesc: "OTP/PIN à°µà°‚à°Ÿà°¿ à°¸à±à°¨à±à°¨à°¿à°¤à°®à±ˆà°¨ à°¸à°®à°¾à°šà°¾à°°à°‚ à°…à°¡à±à°—à±à°¤à±à°‚à°¦à°¿",
    unknownSender: "à°¤à±†à°²à°¿à°¯à°¨à°¿ à°ªà°‚à°ªà°¿à°¨à°µà°¾à°°à±",
    unknownSenderDesc: "à°¨à°‚à°¬à°°à± à°®à±€ à°•à°¾à°‚à°Ÿà°¾à°•à±à°Ÿà±â€Œà°²à°²à±‹ à°²à±‡à°¦à±",
    
    // Recommendations
    whatToDo: "à°®à±€à°°à± à°à°®à°¿ à°šà±‡à°¯à°¾à°²à°¿?",
    immediateActions: "à°¤à°•à±à°·à°£ à°šà°°à±à°¯à°²à±",
    doNot: "à°šà±‡à°¯à°•à±‚à°¡à°¨à°¿à°µà°¿",
    ifAlreadyClicked: "à°®à±€à°°à± à°‡à°ªà±à°ªà°Ÿà°¿à°•à±‡ à°•à±à°²à°¿à°•à± à°šà±‡à°¸à°¿ à°²à±‡à°¦à°¾ à°¸à°®à°¾à°šà°¾à°°à°‚ à°ªà°‚à°šà±à°•à±à°‚à°Ÿà±‡",
    
    deleteMessage: "à°ˆ à°¸à°‚à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°‡à°ªà±à°ªà±à°¡à±‡ à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿",
    blockNumber: "à°ˆ à°«à±‹à°¨à± à°¨à°‚à°¬à°°à±â€Œà°¨à± à°¬à±à°²à°¾à°•à± à°šà±‡à°¯à°‚à°¡à°¿",
    tellFriends: "à°ˆ à°®à±‹à°¸à°‚ à°—à±à°°à°¿à°‚à°šà°¿ 3 à°¸à±à°¨à±‡à°¹à°¿à°¤à±à°²à°•à± à°šà±†à°ªà±à°ªà°‚à°¡à°¿",
    callBank: "à°…à°µà°¸à°°à°®à±ˆà°¤à±‡ à°®à±€ à°¬à±à°¯à°¾à°‚à°•à±â€Œà°•à± à°•à°¾à°²à± à°šà±‡à°¯à°‚à°¡à°¿",
    bankHelpline: "à°¬à±à°¯à°¾à°‚à°•à± à°«à±à°°à°¾à°¡à± à°¹à±†à°²à±à°ªà±â€Œà°²à±ˆà°¨à±: 1800-XXX-XXXX",
    
    dontClickLinks: "à°¸à°‚à°¦à±‡à°¶à°‚à°²à±‹à°¨à°¿ à°²à°¿à°‚à°•à±â€Œà°²à°ªà±ˆ à°•à±à°²à°¿à°•à± à°šà±‡à°¯à°µà°¦à±à°¦à±",
    dontShareOTP: "à°Žà°µà°°à°¿à°¤à±‹à°¨à±‚ OTP à°²à±‡à°¦à°¾ à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°ªà°‚à°šà±à°•à±‹à°µà°¦à±à°¦à±",
    dontCallBack: "à°¨à°‚à°¬à°°à±â€Œà°•à± à°¤à°¿à°°à°¿à°—à°¿ à°•à°¾à°²à± à°šà±‡à°¯à°µà°¦à±à°¦à±",
    dontSendMoney: "à°¡à°¬à±à°¬à± à°ªà°‚à°ªà°µà°¦à±à°¦à±",
    
    callBankImmediately: "à°µà±†à°‚à°Ÿà°¨à±‡ à°®à±€ à°¬à±à°¯à°¾à°‚à°•à±â€Œà°•à± à°•à°¾à°²à± à°šà±‡à°¯à°‚à°¡à°¿: 1800-XXX-XXXX",
    reportCyberCrime: "à°¸à±ˆà°¬à°°à± à°•à±à°°à±ˆà°®à±â€Œà°•à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°‚à°¡à°¿: 1930",
    blockCard: "à°¬à±à°¯à°¾à°‚à°•à± à°¯à°¾à°ªà± à°¦à±à°µà°¾à°°à°¾ à°®à±€ à°•à°¾à°°à±à°¡à±â€Œà°¨à± à°¬à±à°²à°¾à°•à± à°šà±‡à°¯à°‚à°¡à°¿",
    changePasswords: "à°‡à°ªà±à°ªà±à°¡à±‡ à°…à°¨à±à°¨à°¿ à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à±â€Œà°²à°¨à± à°®à°¾à°°à±à°šà°‚à°¡à°¿",
    
    // Save & Share
    saveAnalysis: "à°ˆ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°¸à±‡à°µà± à°šà±‡à°¯à°‚à°¡à°¿",
    keepEvidence: "à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°²à±‡à°¦à°¾ à°‡à°¤à°°à±à°²à°¨à± à°¹à±†à°šà±à°šà°°à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°†à°§à°¾à°°à°¾à°²à± à°‰à°‚à°šà±à°•à±‹à°‚à°¡à°¿",
    downloadPDF: "PDF à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿",
    shareAnalysis: "à°ˆ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°·à±‡à°°à± à°šà±‡à°¯à°‚à°¡à°¿",
    copyLink: "à°²à°¿à°‚à°•à± à°•à°¾à°ªà±€ à°šà±‡à°¯à°‚à°¡à°¿",
    
    // Share Modal
    shareFormat: "à°·à±‡à°°à± à°«à°¾à°°à±à°®à°¾à°Ÿà±",
    fullReport: "à°ªà±‚à°°à±à°¤à°¿ à°¨à°¿à°µà±‡à°¦à°¿à°• - à°µà°¿à°µà°°à°®à±ˆà°¨ à°µà°¿à°¶à±à°²à±‡à°·à°£",
    quickWarning: "à°¤à±à°µà°°à°¿à°¤ à°¹à±†à°šà±à°šà°°à°¿à°• - à°•à±€à°²à°• à°ªà°¾à°¯à°¿à°‚à°Ÿà±à°²à°¤à±‹ à°¸à°¾à°°à°¾à°‚à°¶à°‚",
    anonymous: "à°…à°¨à°¾à°®à°• - à°µà±à°¯à°•à±à°¤à°¿à°—à°¤ à°¸à°®à°¾à°šà°¾à°°à°‚ à°²à±‡à°¦à±",
    shareVia: "à°¦à±€à°¨à°¿ à°¦à±à°µà°¾à°°à°¾ à°·à±‡à°°à± à°šà±‡à°¯à°‚à°¡à°¿",
    preview: "à°ªà±à°°à°¿à°µà±à°¯à±‚",
    privacyNotice: "à°®à±€ à°µà±à°¯à°•à±à°¤à°¿à°—à°¤ à°µà°¿à°µà°°à°¾à°²à± à°·à±‡à°°à± à°šà±‡à°¯à°¬à°¡à°µà±",
    linkCopied: "à°²à°¿à°‚à°•à± à°•à°¾à°ªà±€ à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿! 7 à°°à±‹à°œà±à°²à± à°šà±†à°²à±à°²à±à°¤à±à°‚à°¦à°¿",
    generateLink: "à°·à±‡à°°à± à°²à°¿à°‚à°•à± à°°à±‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà°‚à°¡à°¿",
    
    // Chatbot
    askAnything: "à°¨à°¨à±à°¨à± à°à°¦à±ˆà°¨à°¾ à°…à°¡à°—à°‚à°¡à°¿",
    typeQuestion: "à°®à±€ à°ªà±à°°à°¶à±à°¨ à°Ÿà±ˆà°ªà± à°šà±‡à°¯à°‚à°¡à°¿...",
    
    // Quick Questions
    whyRisky: "à°‡à°¦à°¿ à°ªà±à°°à°®à°¾à°¦à°•à°°à°‚ à°…à°¨à°¿ à°Žà°‚à°¦à±à°•à± à°­à°¾à°µà°¿à°‚à°šà°¬à°¡à±à°¤à±‹à°‚à°¦à°¿?",
    whatIfClicked: "à°¨à±‡à°¨à± à°‡à°ªà±à°ªà°Ÿà°¿à°•à±‡ à°²à°¿à°‚à°•à±â€Œà°ªà±ˆ à°•à±à°²à°¿à°•à± à°šà±‡à°¸à±à°¤à±‡?",
    howToReport: "à°ªà±‹à°²à±€à°¸à±à°²à°•à± à°Žà°²à°¾ à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°¾à°²à°¿?",
    whatIfSharedOTP: "à°¨à±‡à°¨à± à°¨à°¾ OTP à°·à±‡à°°à± à°šà±‡à°¸à±à°¤à±‡?",
    
    // Sender Analysis
    senderAnalysis: "à°ªà°‚à°ªà°¿à°¨à°µà°¾à°°à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£",
    phoneNumber: "à°«à±‹à°¨à± à°¨à°‚à°¬à°°à±",
    inContacts: "à°®à±€ à°•à°¾à°‚à°Ÿà°¾à°•à±à°Ÿà±â€Œà°²à°²à±‹ à°‰à°‚à°¦à°¿",
    notInContacts: "à°®à±€ à°•à°¾à°‚à°Ÿà°¾à°•à±à°Ÿà±â€Œà°²à°²à±‹ à°²à±‡à°¦à±",
    reportedAsSpam: "à°¸à±à°ªà°¾à°®à±â€Œà°—à°¾ {count} à°¸à°¾à°°à±à°²à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿",
    recentlyActivated: "à°‡à°Ÿà±€à°µà°² à°¯à°¾à°•à±à°Ÿà°¿à°µà±‡à°Ÿà± à°šà±‡à°¯à°¬à°¡à°¿à°¨ à°¨à°‚à°¬à°°à±",
    
    // Content Analysis
    contentAnalysis: "à°•à°‚à°Ÿà±†à°‚à°Ÿà± à°µà°¿à°¶à±à°²à±‡à°·à°£",
    suspiciousLink: "à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ à°²à°¿à°‚à°•à±",
    highUrgency: "à°…à°§à°¿à°• à°†à°µà°¶à±à°¯à°•à°¤ à°­à°¾à°· à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°¿à°‚à°¦à°¿",
    grammarScore: "à°µà±à°¯à°¾à°•à°°à°£ à°¸à±à°•à±‹à°°à±",
    suspiciousKeywords: "à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ à°•à±€à°µà°°à±à°¡à±â€Œà°²à±",

    // Navigation
    home: "à°¹à±‹à°®à±",
    about: "à°—à±à°°à°¿à°‚à°šà°¿",
    help: "à°¸à°¹à°¾à°¯à°‚",
    tryDemo: "à°¡à±†à°®à±‹ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿",
    analyze: "à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°‚à°¡à°¿",
    history: "à°šà°°à°¿à°¤à±à°°",
    settings: "à°¸à±†à°Ÿà±à°Ÿà°¿à°‚à°—à±â€Œà°²à±",
    login: "à°²à°¾à°—à°¿à°¨à±",
    signUp: "à°¸à±ˆà°¨à± à°…à°ªà± à°šà±‡à°¯à°‚à°¡à°¿",
    logout: "à°²à°¾à°—à± à°…à°µà±à°Ÿà±",

    // Hero Section
    heroStat: "â‚¹1,200 à°•à±‹à°Ÿà±€",
    heroStatDesc: "à°—à°¤ à°¸à°‚à°µà°¤à±à°¸à°°à°‚ à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚à°²à±‹ SMS à°¸à±à°•à°¾à°®à±â€Œà°² à°¨à±à°‚à°¡à°¿ à°•à±‹à°²à±à°ªà±‹à°¯à°¿à°¨",
    heroTitle: "à° à°—à°²à°¨à± à°†à°ªà°‚à°¡à°¿.",
    heroTitleGradient: "à°®à±€ à°¡à°¬à±à°¬à± à°°à°•à±à°·à°¿à°‚à°šà°‚à°¡à°¿.",
    heroDescription: "à°à°¦à±ˆà°¨à°¾ à°¸à°‚à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°ªà±‡à°¸à±à°Ÿà± à°šà±‡à°¯à°‚à°¡à°¿. à°®à°¾ AI 3 à°¸à±†à°•à°¨à±à°²à°²à±‹ à°šà±†à°•à± à°šà±‡à°¸à±à°¤à±à°‚à°¦à°¿. à°¹à°¿à°‚à°¦à±€, à°‡à°‚à°—à±à°²à±€à°·à± à°²à±‡à°¦à°¾ à°¤à±†à°²à±à°—à±à°²à±‹ à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°¸à°®à°¾à°§à°¾à°¨à°¾à°²à± à°ªà±Šà°‚à°¦à°‚à°¡à°¿. à°ªà±‚à°°à±à°¤à°¿à°—à°¾ à°‰à°šà°¿à°¤à°‚.",
    analyzeButton: "à°‡à°ªà±à°ªà±à°¡à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°‚à°¡à°¿",
    tryFreeButton: "à°‰à°šà°¿à°¤à°‚à°—à°¾ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿ (3 à°¸à°‚à°¦à±‡à°¶à°¾à°²à±)",

    // Features Section
    whySentinelAI: "à°¤à±†à°²à±à°—à±?",
    featureSpeed: "3-à°¸à±†à°•à°‚à°¡à± à°µà°¿à°¶à±à°²à±‡à°·à°£",
    featureSpeedDesc: "à°¸à°‚à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°ªà±‡à°¸à±à°Ÿà± à°šà±‡à°¯à°‚à°¡à°¿, à°¤à°•à±à°·à°£à°®à±‡ à°¸à°®à°¾à°§à°¾à°¨à°‚ à°ªà±Šà°‚à°¦à°‚à°¡à°¿. à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°†à°²à°¸à±à°¯à°‚ à°²à±‡à°¦à±, à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°‰à°ªà°¯à±‹à°—à°‚ à°²à±‡à°¦à±.",
    featureLanguage: "à°®à±€ à°­à°¾à°· à°®à°¾à°Ÿà±à°²à°¾à°¡à±à°¤à±à°‚à°¦à°¿",
    featureLanguageDesc: "à°¹à°¿à°‚à°¦à±€, à°‡à°‚à°—à±à°²à±€à°·à±, à°¤à±†à°²à±à°—à±, à°‰à°°à±à°¦à±‚ à°®à°°à°¿à°¯à± à°¤à°®à°¿à°³à± à°¨à±à°‚à°¡à°¿ à°ªà±‚à°°à±à°¤à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£. à°¸à°°à°³ à°ªà°¦à°¾à°²à±, à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°µà°¿à°µà°°à°£à°²à±.",
    featureRural: "à°—à±à°°à°¾à°®à±€à°£ à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚ à°•à±‹à°¸à°‚ à°¨à°¿à°°à±à°®à°¿à°¤à°‚",
    featureRuralDesc: "à°ªà±à°°à°¤à°¿ à°’à°•à±à°•à°°à°¿ à°•à±‹à°¸à°‚ à°°à±‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà°¾à°°à±. à°Ÿà±†à°•à± à°¨à°¾à°²à°œà±€ à°…à°µà°¸à°°à°‚ à°²à±‡à°¦à±. à°Žà°ªà±à°ªà°Ÿà°¿à°•à±€ à°‰à°šà°¿à°¤à°‚.",
    featureSecurity: "à°–à°¾à°¸à±à°—à±€ à°®à°°à°¿à°¯à± à°¸à±à°°à°•à±à°·à°¿à°¤à°‚",
    featureSecurityDesc: "à°®à±€ à°¸à°‚à°¦à±‡à°¶à°¾à°²à± à°–à°¾à°¸à±à°—à±€à°—à°¾ à°‰à°‚à°Ÿà°¾à°¯à°¿. à°®à±‡à°®à± à°µà°¾à°Ÿà°¿à°¨à°¿ 30 à°°à±‹à°œà±à°² à°¤à°°à±à°µà°¾à°¤ à°¤à±Šà°²à°—à°¿à°¸à±à°¤à°¾à°®à±. à°Ÿà±à°°à°¾à°•à°¿à°‚à°—à± à°²à±‡à°¦à±, à°µà°¿à°œà±à°žà°¾à°ªà°¨à°¾à°²à± à°²à±‡à°¦à±.",

    // Trust Section (badges)
    trustFreeTitle: "100% à°¶à°¾à°¶à±à°µà°¤à°‚à°—à°¾ à°‰à°šà°¿à°¤à°‚",
    trustFreeDesc: "à°•à±à°°à±†à°¡à°¿à°Ÿà± à°•à°¾à°°à±à°¡à± à°…à°µà°¸à°°à°‚ à°²à±‡à°¦à±. à°Žà°ªà±à°ªà°Ÿà°¿à°•à±€.",
    trustLangsTitle: "5 à°­à°¾à°·à°²à±",
    trustLangsDesc: "à°¹à°¿à°‚à°¦à±€, à°‡à°‚à°—à±à°²à±€à°·à±, à°¤à±†à°²à±à°—à±, à°‰à°°à±à°¦à±‚, à°®à°°à°¿à°¯à± à°¤à°®à°¿à°³à± à°¸à°®à°°à±à°¥à°¿à°¤à°‚",
    trustIndiaTitle: "à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚ à°•à±‹à°¸à°‚ à°¨à°¿à°°à±à°®à°¿à°¤à°‚",
    trustIndiaDesc: "à°­à°¾à°°à°¤à±€à°¯ à°œà¤¾à¤²Ð¼Ð½Ð¾Ð¶ à°¨à°®à±‚à°¨à°¾à°²à°•à± à°ªà±à°°à°¤à±à°¯à±‡à°•à°‚à°—à°¾ à°¨à°¿à°°à±à°®à°¿à°¤à°‚",
    trustSecurityTitle: "à°—à±‹à°ªà°¨à±€à°¯à°¤ à°®à±Šà°¦à°Ÿà°¿à°¦à°¿",
    trustSecurityDesc: "à°®à±€ à°¡à±‡à°Ÿà°¾ à°Žà°¨à±â€Œà°•à±à°°à°¿à°ªà±à°Ÿà± à°šà±‡à°¯à°¬à°¡à±à°¤à±à°‚à°¦à°¿ à°®à°°à°¿à°¯à± à°¸à±à°µà°¯à°‚à°šà°¾à°²à°•à°‚à°—à°¾ à°¤à±Šà°²à°—à°¿à°¸à±à°¤à°¾à°°à±",

    // Statistics Section
    stats1Title: "SMS à°¸à±à°•à°¾à°®à±â€Œà°²à± à°—à±à°°à±à°¤à°¿à°‚à°šà°¬à°¡à±à°¡à°¾à°¯à°¿",
    stats2Title: "à°µà°¿à°¨à°¿à°¯à±‹à°—à°¦à°¾à°°à±à°²à± à°°à°•à±à°·à°¿à°‚à°šà°¬à°¡à±à°¡à°¾à°°à±",
    stats3Title: "à°¤à°ªà±à°ªà±à°¡à± à°¸à°¾à°¨à±à°•à±‚à°²à°¤à°²à±",

    // CTA Section
    readyToProtect: "à°®à°¿à°®à±à°®à°²à±à°¨à°¿ à°°à°•à±à°·à°¿à°‚à°šà°Ÿà°¾à°¨à°¿à°•à°¿ à°¸à°¿à°¦à±à°§à°®à±ˆà°¨à°¾à°°à°¾?",
    startAnalyzing: "à°‡à°ªà±à°ªà±à°¡à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°¡à°‚ à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°‚à°¡à°¿",
    noCardRequired: "à°•à±à°°à±†à°¡à°¿à°Ÿà± à°•à°¾à°°à±à°¡à± à°…à°µà°¸à°°à°‚ à°²à±‡à°¦à±",

    // Footer
    company: "à°•à°‚à°ªà±†à°¨à±€",
    privacy: "à°—à±‹à°ªà°¨à±€à°¯à°¤",
    terms: "à°¨à°¿à°¬à°‚à°§à°¨à°²à±",
    contact: "à°¸à°‚à¤ªà°°à±à°•",
    followUs: "amin à°…à°¨à±à°¸à°°à°¿à°‚à°šà°‚à°¡à°¿",

    // Auth
    email: "à°ˆà°®à±†à°¯à°¿à°²à±",
    password: "à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à±",
    forgotPassword: "à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°®à°°à±à°šà°¿à°ªà±‹à°¯à°¾à°°à°¾?",
    dontHaveAccount: "à°–à°¾à°¤à°¾ à°²à±‡à°¦à°¾?",
    alreadyHaveAccount: "à°‡à°ªà±à°ªà°Ÿà°¿à°•à±‡ à°–à°¾à°¤à°¾ à°‰à°‚à°¦à°¾?",

    // Analysis Page
    enterMessage: "à°¸à°‚à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿",
    selectLanguage: "à°­à°¾à°·à°¨à± à°Žà°‚à°šà±à°•à±‹à°‚à°¡à°¿",
    upload: "à°…à°ªà±à°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿",
    cancel: "à°°à°¦à±à°¦à± à°šà±‡à°¯à°‚à°¡à°¿",
    save: "à°¸à±‡à°µà± à°šà±‡à°¯à°‚à°¡à°¿",
    share: "à°·à±‡à°°à± à°šà±‡à°¯à°‚à°¡à°¿",

    // Analyze Page
    pasteMessage: "à°¸à°‚à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°µà±†à°‚à°Ÿà°¨à±‡ à°ªà±‡à°¸à±à°Ÿà± à°šà±‡à°¯à°‚à°¡à°¿",
    senderPhone: "à°ªà°‚à°ªà°¿à°¨à°µà°¾à°°à°¿ à°«à±‹à°¨à± à°¨à°‚à°¬à°°à±",
    messageDate: "à°¸à°‚à°¦à±‡à°¶ à°¤à±‡à°¦à±€",
    messageTime: "à°¸à°‚à°¦à±‡à°¶ à°¸à°®à°¯à°‚",
    optional: "à°à°šà±à°›à°¿à°•à°‚",
    uploadScreenshot: "à°¸à±à°•à±à°°à±€à°¨à±â€Œà°·à°¾à°Ÿà± à°…à°ªà±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿",
    dragDropFile: "à°«à±ˆà°²à±â€Œà°¨à± à°‡à°•à±à°•à°¡ à°¡à±à°°à°¾à°—à± à°šà±‡à°¯à°‚à°¡à°¿ à°²à±‡à°¦à°¾ à°Žà°‚à°šà±à°•à±‹à°µà°¡à°¾à°¨à°¿à°•à°¿ à°•à±à°²à°¿à°•à± à°šà±‡à°¯à°‚à°¡à°¿",
    supportedFormats: "à°¸à°ªà±‹à°°à±à°Ÿà±: PNG, JPG (à°—à°°à°¿à°·à±à°  5MB)",
    analyzeNow: "à°‡à°ªà±à°ªà±à°¡à± à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà±‡à°¯à°‚à°¡à°¿",
    analyzing: "à°µà°¿à°¶à±à°²à±‡à°·à°£ à°•à±Šà°¨à°¸à°¾à°—à±à°¤à±‹à°‚à°¦à°¿...",
    
    // Analysis Results
    riskAssessment: "à°à±à°‚à°¦à±à°µ à°…à°‚à°šà°¨à°¾",
    threatLevel: "à°’checkpoint à°¸à±à°¥à°¾à°¯à°¿",
    riskPercentage: "{score}% à°‹**",
    recommendations: "à°¸à°¿à°Žà°Ž",
    immediateSteps: "à°¤à°•à±à°·à°£ à°šà°°à±à°¯à°²à±",
    precautions: "à°œà°¾à°—à±à°°à°¤à±à°¤à°²à±",
    reportPolice: "à°•à¤¥à°¿à°¤à°¸à±‹à°ªà± à°šà±‡à°¯à°‚à°¡à°¿",
    keepAnalysis: "à°‡à°¨à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°‰à°‚à°šà°‚à°¡à°¿",
    downloadAs: "PDF à°—à°¾ à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿",
    printAnalysis: "à°µà°¿à°¶à±à°²à±‡à°·à°£ à°®à±à°¦à±à°°à°¿à°‚à°šà°‚à°¡à°¿",

    // History Page
    analysisHistory: "à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà°°à°¿à°¤à±à°°",
    noAnalysisYet: "à°‡à°‚à°•à°¾ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà°°à°¿à°¤à±à°° à°²à±‡à°¦à±",
    totalAnalyzed: "à°®à±Šà°¤à±à°¤à°‚ à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°¾à°°à±",
    highRiskCount: "à°…à°§à°¿à°• à°à±à°‚à°¦à±à°µ",
    mediumRiskCount: "à°®à°§à±à°¯ à°à±à°‚à°¦à±à°µ",
    lowRiskCount: "à°¨à°¿à°®à±à°¨ à°à±à°‚à°¦à±à°µ",
    dateAnalyzed: "à°µà°¿à°¶à±à°²à±‡à°·à°¿à°‚à°šà°¿à°¨ à°¤à±‡à°¦à±€",
    riskScore: "à°à±à°‚à°¦à±à°µ à°¸à±à°•à±‹à°°à±",
    sender: "à°ªà°‚à°ªà°¿à°¨à°µà°¾à°°à±",
    messagePreview: "à°¸à°‚à°¦à±‡à°¶ à°ªà±à°°à°¿à°­à±‚",
    actions: "à°šà°°à±à°¯à°²à±",
    view: "à°µà±€à°•à±à°·à°£",
    delete: "à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿",
    deleteConfirm: "à°ˆ à°µà°¿à°¶à±à°²à±‡à°·à°£à°¨à± à°¤à±Šà°²à°—à°¿à°‚à°šà°¾à°²à°¨à°¿à°Žà°¨à±à°¨à°¾?",

    // Settings Page
    userSettings: "à°µà°¿à°¨à°¿à°¯à±‹à°—à°¦à°¾à°°à± à°¸à±†à°Ÿà±à°Ÿà°¿à°‚à°—à±â€Œà°²à±",
    accountSettings: "à°–à°¾à°¤à°¾ à°¸à±†à°Ÿà±à°Ÿà°¿à°‚à°—à±â€Œà°²à±",
    preferences: "à°ªà°°à±à°¯à¤¾à¤¯à°¾à°²à±",
    language: "à°­à°¾à°·",
    theme: "à°¥à±€à°®à±",
    notifications: "à°¤à°¿à°ªà±à°ªà°¿à°£à±€à°²à±",
    emailNotifications: "à°‡à°®à±†à°¯à°¿à°²à± à°¤à°¿à°ªà±à°ªà°¿à°£à±€à°²à±",
    enableNotifications: "à°…à°§à°¿à°• à°à±à°‚à°¦à±à°µ à°¸à°‚à°¦à±‡à°¶à°¾à°² à°•à±‹à°¸à°‚ à°‡à°®à±†à°¯à°¿à°²à± à°¹à±†à°šà±à°›à°°à°¿à°•à°²à± à°ªà±à°°à°¾à°°à°‚à°­à°¿à°‚à°šà°‚à°¡à°¿",
    autoDelete: "à°¸à±à°µà°¯à°‚à°šà°¾à°²à°•à°‚à°—à°¾ à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿",
    deleteAfter: "30 à°°à±‹à°œà±à°² à°¤à°°à±à°µà°¾à°¤ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à°¨à± à°¸à±à°µà°¯à°‚à°šà°¾à°²à°•à°‚à°—à°¾ à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿",
    version: "à°¸à°‚à°¸à±à°•à°°à°£",

    // Auth Pages
    signInTitle: "SentinelAI à°•à± à°¸à°‚à°§à°¾à°¨à°‚ à°šà±‡à°¯à°‚à°¡à°¿",
    createAccount: "à°–à°¾à°¤à°¾ à°¸à±ƒà°·à±à°Ÿà°¿à°‚à°šà°‚à°¡à°¿",
    enterEmail: "à°®à±€ à°‡à°®à±†à°¯à°¿à°²à± à°šà°¿à°°à±à°¨à°¾à°®à°¾ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿",
    enterPassword: "à°®à±€ à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿",
    confirmPassword: "à°®à±€ à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°¨à°¿à°°à±à°§à°¾à°°à°¿à°‚à°šà°‚à°¡à°¿",
    signIn: "à°¸à°‚à°§à°¾à°¨à°‚ à°šà±‡à°¯à°‚à°¡à°¿",
    orContinueWith: "à°²à±‡à°¦à°¾ à°¤à±‹ à°•à±Šà°¨à°¸à°¾à°—à°‚à°¡à°¿",
    googleSignIn: "Google à°¤à±‹ à°¸à°‚à°§à°¾à°¨à°‚ à°šà±‡à°¯à°‚à°¡à°¿",
    agreeTerms: "à°¨à±‡à°¨à± à°¨à°¿à°¬à°‚à°§à°¨à°²à± à°®à°°à°¿à°¯à± à°—à±‹à°ªà±à°¯à°¤à°¾ à°µà°¿à°§à°¾à°¨à°¾à°¨à°¿à°•à°¿ à°¸à°®à±à°®à°¤à°¿à°¸à±à°¤à±à°¨à±à°¨à°¾à°¨à±",
    haveAccount: "à°–à°¾à°¤à°¾ à°‰à°‚à°¦à°¾?",
    noAccount: "à°–à°¾à°¤à°¾ à°²à±‡à°¦à°¾?",
    resetPassword: "à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°°à±€à°¸à±†à°Ÿà± à°šà±‡à°¯à°‚à°¡à°¿",
    checkEmail: "à°ªà°¾à°¸à±â€Œà°µà°°à±à°¡à± à°°à±€à°¸à±†à°Ÿà± à°²à¤¿à¤‚à¤•à± à°•à±‹à°¸à°‚ à°®à±€ à°‡à°®à±†à°¯à°¿à°²à± à°¤à°¨à°¿à°–à±€ à°šà±‡à°¯à°‚à°¡à°¿",

    // Demo Page
    demoMode: "à°¡à±†à°®à±‹ à°®à±‹à°¡à±",
    freeAnalyses: "à°«à±à°°à±€ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à± à°®à°¿à°—à°¿à°²à°¿ à°‰à°¨à±à°¨à°¾à°¯à°¿",
    demoTip: "3 à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à°¨à± à°«à±à°°à±€à°—à°¾ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿!",
    loginToSave: "à°®à±€ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à°¨à± à°¸à¦‚à°°à°•à±à°·à°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°²à°¾à°—à°¿à°¨à± à°šà±‡à°¯à°‚à°¡à°¿",

    // Home Page Additional
    buildForIndia: "à°­à°¾à°°à°¤à°¦à±‡à°¶à°¾à°¨à°¿à°•à°¿ à°¨à°¿à°°à±à°®à°¿à°¤à°‚",
    protectFamilyAndBusiness: "à°®à±€ à°•à±à°Ÿà±à°‚à°¬à°‚ à°®à°°à°¿à°¯à± à°µà±à°¯à°¾à°ªà°¾à°°à°¾à°¨à±à°¨à°¿ SMS à°•æœ¯à°¨à±à°‚à°¡à°¿ à°°à°•à±à°·à°¿à°‚à°šà°‚à°¡à°¿",
    learnMore: "à°®à°°à°¿à°¨à±à°¨à°¿ à°¤à±†à°²à±à°¸à±à°•à±‹à°‚à°¡à°¿",
    getStarted: "à°ªà±à°°à°¾à°°à°‚à°­à°¿à°¦à±à°¦à°¾à°‚",
    testimonials: "à°ªà±à°°à°œà°²à± à°à°®à°¿ à°šà±†à°ªà±à°ªà°¾à°°à±",
    seePage: "à°®à°¾", 
    dataSecurityPage: "à¦¡à±‡à°Ÿà°¾ à°¸à¥à¤°à¤•à¥à¤·à¤¾ à°ªà§ƒà¦·à§à¤ ",
    forDetails: "à°®à°°à°¿à°¨à±à°¨à°¿oldDetails",

    // Footer Additional
    aboutUs: "à°®à°¾ à°—à±à°°à°¿à°‚à°šà°¿",
    ourMission: "à°•à°°à±à°¨à°¾à°Ÿà°•Ä à°­à°¾à°°à°¤à±â€Œà°¨à± SMS à°¨à±à°‚à°¡à°¿ à°°à°•à±à°·à°¿à°‚à°šà°¡à°‚ à°®à°¾ à°²à°•à±à°·à±à°¯à°‚",
    quickLinks: "à°¤à±à°µà°°à°¿à°¤ à°²à¤¿à¤‚Ú©à±â€Œà°²à±",
    resources: "à°µà°¨à°°à±à°²à±",
    fAQ: "à°¤à°°à°šà±à°—à°¾ à°…à°¡à°¿à°—à°¿à°¨ à°ªà±à°°à°¶à±à°¨à°²à±",
    blogPostsAndUpdates: "à°¬à±à°²à°¾à¤—à±, à°ªà±‹à°¸à±à°Ÿà±â€Œà°²à± à°®à°°à°¿à°¯à± à°¨à°µà±€à°•à°°à°£à°²à±",
    copyright: "à°¸à°°à±à°µ à°¹à°•à±à°•à±à°²à± à°¸à°‚à°°à°•à±à°·à°¿à°¤à°¾à°²à±",
    builtWith: "à°¨à±à°‚à°¡à°¿ à°¨à°¿à°°à±à°®à°¿à°¤à°‚",

    // Common
    error: "à°²à±‹à°ªà°‚",
    success: "à°¸à°«à°²à°‚",
    warning: "à°¹à±†à°šà±à°šà°°à°¿à°•",
    info: "à°¸à°®à°¾à°šà°¾à°°à°‚",
    confirm: "à°¨à°¿à°°à±à°§à°¾à°°à°¿à°‚à°šà°‚à°¡à°¿",
    close: "à°®à±‚à°¯à°‚à°¡à°¿",
    back: "à°µà±†à°¨à±à°•",
    next: "à°¤à°°à±à°µà°¾à°¤",
    previous: "à°®à°‚à°¦à°ªà°¿à°¨",
    skip: "à°¦à°¾à°Ÿà°µà±‡à°¯à°‚à°¡à°¿",
    continue: "à°•à±Šà°¨à°¸à°¾à°—à°‚à°¡à°¿",
    search: "à°¶à±‹à°§à°¿à°‚à°šà°‚à°¡à°¿",
    filter: "à°«à°¿à°²à±à°Ÿà°°à± à°šà±‡à°¯à°‚à°¡à°¿",
    sort: "à°•à±à°°à°®à°¬à°¦à±à°§à±€à°•à°°à°¿à°‚à°šà°‚à°¡à°¿",
    more: "à°®à°°à°¿à°¨à±à°¨à°¿",
    less: "à°¤à°•à±à°•à±à°µ",
    show: "à°šà±‚à°ªà°¿à°‚à°šà±",
    hide: "à°šà±†à°µà°¿à°²à±‹",
    expand: "à°µà°¿à°¸à±à°¤à°¾à°°à°¿à°‚à°šà°‚à°¡à°¿",
    collapse: "à°•à±‚à°²à°¿à°ªà±‹à°‚à°¡à°¿",
    download: "à°¡à±Œà°¨à±â€Œà°²à±‹à°¡à± à°šà±‡à°¯à°‚à°¡à°¿",
    copy: "à°•à°¾à°ªà±€ à°šà±‡à°¯à°‚à°¡à°¿",
    copiedToClipboard: "à°•à±à°²à°¿à°ªà±â€Œà°¬à±‹à°°à±à°¡à±â€Œà°•à± à°•à°¾à°ªà±€ à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿",
    tryAgain: "à°®à°³à±à°²à±€ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿",
    goHome: "à°‡à°‚à°Ÿà°¿à°•à°¿ à°µà±†à°³à±à°²à°‚à°¡à°¿",

    // About Page
    whyWeBuiltThis: "à°®à±‡à°®à± à°¦à±€à°¨à±à°¨à°¿ à°Žà°‚à°¦à±à°•à± à°¨à°¿à°°à±à°®à°¿à°‚à°šà°¾à°‚",
    aboutIntro: "à°ªà±à°°à°¤à°¿ à°µà°¾à°°à°‚, à°µà±‡à°²à°¾à°¦à°¿ à°—à±à°°à°¾à°®à±€à°£ à°­à°¾à°°à°¤à±€à°¯à±à°²à± SMS à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°…à°‚à°¦à±à°•à±à°‚à°Ÿà°¾à°°à±, à°…à°µà°¿ à°¨à°¿à°œà°®à±ˆà°¨à°Ÿà±à°²à± à°•à°¨à°¿à°ªà°¿à°¸à±à°¤à°¾à°¯à°¿ à°•à°¾à°¨à±€ à°…à°µà°¿ à°•à°¾à°¦à±.",
    aboutProblem: "à°’à°• à°¸à°‚à°¦à±‡à°¶ à°µà°¾à°°à°¿ à°†à°§à°¾à°°à± à°—à°¡à±à°µà± à°®à±à°—à°¿à°¸à±à°•à±à°‚à°¦à°¨à°¿ à°šà±†à°ªà±à°ªà±à°•à±à°‚à°Ÿà±à°‚à°¦à°¿. à°¨à°•à°¿à°²à±€ à°¬à±à°¯à°¾à°‚à°•à± à°…à°²à°°à±à°Ÿà± à°µà°¾à°°à°¿ à°–à°¾à°¤à°¾ à°®à±‚à°¸à°¿à°µà±‡à°¯à°¬à°¡à±à°¤à±à°‚à°¦à°¨à°¿ à°šà±†à°ªà±à°ªà±à°•à±à°‚à°Ÿà±à°‚à°¦à°¿. à°µà°¾à°°à± à°Žà°¨à±à°¨à°¡à±‚ à°ªà±à°°à°µà±‡à°¶à°¿à°‚à°šà°¨à°¿ à°²à°¾à°Ÿà°°à±€. à° à°ªà±à°°à°­à±à°¤à±à°µ à°ªà¦°à¦¿à¦•à°²à±à°ªà°¨ à° à°¸à°°à°¿à°ªà±†à°Ÿà±à°Ÿà°¿à°¨ à°•à±‚à°¡à°¾ à°²à±‡à°¨à°¿à°¦à°¿.",
    aboutProblem2: "à°ˆ à°¸à°‚à°¦à±‡à°¶à°¾à°²à± à°­à°¯à°¾à°‚à°¦à±‹à°³à°¨à°¨à± à°¸à±ƒà°·à±à°Ÿà°¿à°‚à°šà°¡à°¾à°¨à°¿à°•à°¿ à°°à±‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà°¬à°¡à±à°¡à°¾à°¯à°¿. à°µà°¾à°°à± à°…à°§à°¿à°•à°¾à°°à°¿à°•-à°¸à±Œà°‚à°¡à± à°­à°¾à°·à°¨à± à°‰à°ªà°¯à±‹à°—à°¿à°¸à±à°¤à°¾à°°à±. à°µà°¾à°°à± à°¤à±€à°µà±à°°à°¤à°²à°¨à± à°§à°®à±à°®à±†à°•à°¡à°¤à°¾à°°à±. à°µà°¾à°°à± à°¤à°•à±à°·à°£ à°šà°°à±à°¯à°¨à± à°•à±‹à°°à±à°•à±à°‚à°Ÿà°¾à°°à±.",
    aboutProblem3: "à°®à°°à°¿à°¯à± à°µà°¾à°°à± à°ªà°¨à°¿ à°šà±‡à°¸à±à°¤à°¾à°°à±.",
    aboutStats: "2023 à°²à±‹ à°®à°¾à°¤à±à°°à°®à±‡, à°­à°¾à°°à°¤à±€à°¯à±à°²à± SMS à°®à±‹à°¸à°‚ à°¨à±à°‚à°¡à°¿ â‚¹1,200 à°•à±‹à°Ÿà°¿à°² à°•à°‚à°Ÿà±‡ à°Žà°•à±à°•à±à°µ à°•à±‹à°²à±à°ªà±‹à°¯à°¾à°°à±.",
    aboutMission: "à°®à±‡à°®à± SentinelAI à°¨à°¿ à°¸à±ƒà°·à±à°Ÿà°¿à°‚à°šà°¾à°®à± à°Žà°‚à°¦à±à°•à°‚à°Ÿà±‡ à°ªà±à°°à°¤à°¿ à°’à°•à±à°•à°°à± à°°à°•à±à°·à°£à°•à± à°…à°°à±à°¹à±à°²à±, à°µà°¾à°°áƒ à°Žà°•à±à°•à°¡ à°¨à°¿à°µà°¸à°¿à°¸à±à°¤à°¾à°°à± à°²à±‡à°¦à°¾ à° à°­à°¾à°· à°®à°¾à°Ÿà±à°²à°¾à°¡à°¤à°¾à°°à±.",
    problemIsReal: "à°¸à°®à°¸à±à°¯ à°µà°¾à°¸à±à°¤à°µà°®à±ˆà°¨à°¦à°¿",
    realityOfFraud: "à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚à°²à±‹ SMS à°®à±‹à°¸ à°¯à±Šà°•à±à°• à°µà°¾à°¸à±à°¤à°µà°¿à°•à°¤",
    lostToFraud: "2023 à°²à±‹ à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚à°²à±‹ à°®à±‹à°¸ à°¨à±à°‚à°¡à°¿ à°•à±‹à°²à±à°ªà±‹à°¯à°¿à°¨",
    cyberCrimeReports: "à°¸à±ˆà°¬à°°à± à°•à±à°°à±ˆà°®à± à°¨à°¿à°µà±‡à°¦à°¿à°•à°²à±",
    victimLiveRural: "à°—à±à°°à°¾à°®à±€à°£ à°ªà±à°°à°¾à°‚à°¤à°¾à°²à°²à±‹ à°œà±€à°µà°¿à°‚à°šà±‡ à°¬à°¾à°§à°¿à°¤à±à°²à±",
    yearOverYearIncrease: "à°¸à±à°®à°¿à°·à°¿à°‚à°—à± à°²à±‹ à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°¨à°¿à°•à°¿ à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°¨à°¿à°•à°¿ à°ªà±†à°°à±à°—à±à°¦à°²",
    averageVictimLoss: "à°¸à°—à°Ÿà± à°¬à°¾à°§à°¿à°¤à±à°² à°¨à°·à±à°Ÿà°‚ (à°¤à°°à°šà±à°—à°¾ à°œà±€à°µà°¿à°¤à°•à°¾à°²à°‚ à°†à°¦à°¾)",
    reportedToAuthorities: "à°•à±‡à°µà°²à°‚ 23% à°šà±‡à°¤à°²à°¾à°ªà±à°²à± à°…à°§à°¿à°•à°¾à°°à±à°²à°•à± à°¨à°¿à°µà±‡à°¦à°¿à°¸à±à°¤à°¾à°°à±",
    cannotIdentifyScams: "78% à°—à±à°°à°¾à°®à±€à°£ à°­à°¾à°°à°¤à±€à°¯à±à°²à± à°¸à°¾à°§à°¾à°°à°£ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à°®à±‚à°¨à°¾à°²à°¨à± à°—à±à°°à±à°¤à°¿à°‚à°šà°²à±‡à°°à±",
    dontSeekHelp: "43% à°¬à°¾à°§à°¿à°¤à±à°²à± à°¸à°¿à°—à±à°—à± à°•à°¾à°°à°£à°‚à°—à°¾ à°¸à°¹à°¾à°¯à°‚ à°šà±‡à°¯à°°à±",
    bankingScramsAccount: "à°¬à±à°¯à°¾à°‚à°•à°¿à°‚à°—à± à°šà±‡à°¤à°²à°¾à°ªà±à°²à± à°®à±Šà°¤à±à°¤à°‚ SMS à°®à±‹à°¸ à°¯à±Šà°•à±à°• 43% à°–à°¾à°¤à°¾",
    moreAlarmingFacts: "à°®à°°à°¿à°¨à±à°¨à°¿ à°†à°‚à°¦à±‹à°³à°¨à°¾à°•à°°à°®à±ˆà°¨ à°µà°¾à°¸à±à°¤à°µà°¾à°²à±",
    whyRuralTargeted: "à°—à±à°°à°¾à°®à±€à°£ à°ªà±à°°à°¾à°‚à°¤à°¾à°²à°¨à± à°Žà°‚à°¦à±à°•à± à°²à°•à±à°·à±à°¯à°‚à°—à°¾ à°šà±‡à°¸à±à°¤à°¾à°°à±",
    limitedDigitalLiteracy: "à°¸à±€à°®à°¿à°¤à°®à±ˆà°¨ à°¡à°¿à°œà°¿à°Ÿà°²à± à°¸à°¾à°•à±à°·à°°à°¤ à°®à°°à°¿à°¯à± à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¸à¦šà±‡à°¤à°¨",
    languageBarriers: "à°­à°¾à°· à°šà±‡à°¤à°¿à°ªà°Ÿà±à°Ÿà°²à± (à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¹à±†à°šà±à°šà°°à°¿à°•à°²à± à°•à±‡à°µà°²à°‚ à°†à°‚à°—à±à°²à°‚à°²à±‹)",
    trustInMessages: "à°…à°§à°¿à°•à°¾à°°à°¿à°•-à°•à°¨à°¿à°ªà°¿à°‚à°šà±‡ à°¸à°‚à°¦à±‡à°¶à°¾à°²à°ªà±ˆ à°µà°¿à°¶à±à°µà°¾à°¸à°‚",
    lessAccessToEducation: "à°®à±‹à°¸ à°µà°¿à°¦à±à°¯ à°µà°¨à°°à±à°²à°•à± à°ªà°°à°¿à°®à°¿à°¤ à°ªà±à°°à°¾à°ªà±à°¯à°¤",
    delayedReportingAllows: "à°†à°²à°¸à±à°¯à°®à±ˆà°¨ à°¨à°¿à°µà±‡à°¦à°¨ à°šà±‡à°¤à°²à°¾à°ªà±à°²à°•à± à°Žà°•à±à°•à±à°µ à°¸à°®à°¯à°‚ à°•à±‹à°¸à°‚ à°ªà°¨à°¿à°šà±‡à°¯à°¡à°¾à°¨à°¿à°•à°¿ à°…à°¨à±à°®à°¤à°¿à°¸à±à°¤à±à°‚à°¦à°¿",
    ourSolution: "à°®à°¾ à°ªà°°à°¿à°·à±à°•à°¾à°°à°‚",
    simpleAccessibleProtection: "à°ªà±à°°à°¤à°¿ à°’à°•à±à°•à°°à°¿ à°•à±‹à°¸à°‚ à°¸à°°à°³, à°‰à°šà°¿à°¤ à°®à°°à°¿à°¯à± à°¸à±à°‚à°¦à°°à°®à±ˆà°¨ à°¸à°‚à°°à°•à±à°·à°£",
    threeSecondAnalysis: "3-à°¸à±†à°•à°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°£",
    freeAiAnalyzes: "à°¨à°¿à°°à±à°ªà°¯à±‹à°—à°®à±ˆà°¨ AI à°‡à°¦à°¿ à°¤à°•à±à°·à°£à°®à±‡ à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°¿à°¸à±à°¤à±à°‚à°¦à°¿",
    worksInYourLanguage: "à°®à±€ à°­à°¾à°·à°²à±‹ à°ªà°¨à°¿à°šà±‡à°¸à±à°¤à±à°‚à°¦à°¿ (à°®à°°à°¿à°¨à±à°¨à°¿ à°°à°¾à°¬à±‹à°¯à°¾à°°à±)",
    builtForEveryone: "à°ªà±à°°à°¤à°¿ à°’à°•à±à°•à°°à°¿ à°•à±‹à°¸à°‚ à°¨à°¿à°°à±à°®à°¿à°¤à°®à±ˆà°¨à°¦à°¿",
    noTechNeeded: "à°•à°¾à°¨à±€ à°¸à°¾à°‚à°•à±‡à°¤à°¿à°• à°œà±à°žà°¾à°¨à°‚ à°…à°µà°¸à°°à°‚ à°²à±‡à°¦à±",
    privacyFirst: "à°—à±‹à°ªà±à°¯à°¤à°¨à± à°®à±Šà°¦à°Ÿ",
    messagesEncrypted: "à°¸à°‚à°¦à±‡à°¶à°¾à°²à± 30 à°°à±‹à°œà±à°² à°¤à°°à±à°µà°¾à°¤ à°—à±à°ªà±à°¤à±€à°•à°°à°¿à°‚à°šà°¬à°¡à°¤à°¾à°¯à°¿ à°®à°°à°¿à°¯à± à°¤à±Šà°²à°—à°¿à°‚à°šà°¬à°¡à°¤à°¾à°¯à°¿",
    indiaSpecific: "à°­à°¾à°°à°¤-à°¨à°¿à°°à±à°¦à°¿à°·à±à°Ÿà°®à±ˆà°¨à°¦à°¿",
    trainedOnIndian: "à°­à°¾à°°à°¤à±€à°¯ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à°®à±‚à°¨à°¾à°²à°ªà±ˆ à°¶à°¿à°•à±à°·à°£",
    freeForever: "à°Žà°²à±à°²à°ªà±à°ªà±à°¡à±‚ à°‰à°šà°¿à°¤à°‚",
    noAdsTracking: "à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°†à°ªà°°à±‡à°Ÿà°°à±à°²à±, à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°Ÿà±à°°à°¾à°•à°¿à°‚à°—à± à°²à±‡à°¦à±, à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°®à°°à±à°—à±à°ªà±ˆà°¨ à°–à°°à±à°šà±à°²à± à°²à±‡à°¨à°¿à°¦à°¿",
    fourSimpleSteps: "à°®à±€ à°¨à±à°‚à°¡à°¿ à°°à°•à±à°·à°¿à°‚à°šà±à°•à±‹à°µà°¡à°¾à°¨à°¿à°•à°¿ à°¨à°¾à°²à±à°—à± à°¸à°°à°³ à°¦à°¶à°²à±",
    copyTheSuspicious: "à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ à°¸à°‚à°¦à±‡à°¶ à°µà°šà°¨à°¾à°¨à±à°¨à°¿ à°•à°¾à°ªà±€ à°šà±‡à°¯à°‚à°¡à°¿",
    aiAnalysis: "AI à°µà°¿à°¶à±à°²à±‡à°·à°£",
    weCheck47: "à°®à±‡à°®à± 47 à°¤à±†à°²à°¿à°¸à°¿à°¨ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à°®à±‚à°¨à°¾à°²à°¨à± à°¤à°¨à°¿à°–à±€ à°šà±‡à°¸à±à°¤à°¾à°®à±",
    getVerdict: "à°¨à°¿à°°à±à°£à°¯à°‚ à°ªà±Šà°‚à°¦à°‚à°¡à°¿",
    clearAnswer: "à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°¸à°®à°¾à°§à°¾à°¨à°‚: à°¸à±à°°à°•à±à°·à°¿à°¤à°®à±ˆà°¨à°¦à°¿, à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦à°®à±ˆà°¨à°¦à°¿, à°²à±‡à°¦à°¾ à°šà±‡à°¤à°²à°¾à°ªà±à°²à±",
    takeAction: "à°šà°°à±à°¯ à°¤à±€à°¸à±à°•à±‹à°‚à°¡à°¿",
    simpleStepsInLanguage: "à°®à±€ à°­à°¾à°·à°²à±‹ à°¸à°°à°³ à°¦à°¶à°²à±",

    // Help Page
    helpCenter: "à°¸à°¹à°¾à°¯ à°•à±‡à°‚à°¦à±à°°à°‚",
    findAnswers: "SentinelAI à°—à±à°°à°¿à°‚à°šà°¿ à°¸à°¾à°§à°¾à°°à°£ à°ªà±à°°à°¶à±à°¨à°²à°•à± à°¸à°®à°¾à°§à°¾à°¨à°¾à°²à°¨à± à°•à°¨à±à°—à±Šà°¨à°‚à°¡à°¿",
    general: "à°¸à°¾à°§à°¾à°°à°£",
    howDoesWork: "SentinelAI à°Žà°²à°¾ à°ªà°¨à°¿à°šà±‡à°¸à±à°¤à±à°‚à°¦à°¿?",
    pasteYourMessage: "à°®à±€ à°¸à°‚à°¦à±‡à°¶à°¾à°¨à±à°¨à°¿ à°…à°‚à°Ÿà°¿à°‚à°šà°‚à°¡à°¿, à°®à°¾ AI à°¦à±€à°¨à°¿à°¨à°¿ 3 à°¸à±†à°•à°¨à±à°²à°²à±‹ à°µà°¿à°¶à±à°²à±‡à°·à°¿à°¸à±à°¤à±à°‚à°¦à°¿, à°®à±€à°°à± à°®à±€ à°­à°¾à°·à°²à±‹ à°¸à±à°ªà°·à±à°Ÿà°®à±ˆà°¨ à°¸à°®à°¾à°§à°¾à°¨à°‚ à°ªà±Šà°‚à°¦à±à°¤à°¾à°°à±.",
    isItReallyFree: "à°‡à°¦à°¿ à°¨à°¿à°œà°‚à°—à°¾ à°‰à°šà°¿à°¤à°®à±ˆà°¨à°¦à±‡à°¨à°¾?",
    yesCompletelyfree: "à°…à°µà±à°¨à±. à°–à°šà±à°šà°¿à°¤à°‚à°—à°¾ à°‰à°šà°¿à°¤à°®à±ˆà°¨à°¦à°¿. à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°•à±à°°à±†à°¡à°¿à°Ÿà± à°•à°¾à°°à±à°¡à± à°²à±‡à°¦à±, à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¦à°¾à°šà°¿à°¨ à°«à±€à°œà±à°²à± à°²à±‡à°¨à°¿à°¦à°¿, à°Žà°²à±à°²à°ªà±à°ªà±à°¡à±‚. à°—à±à°°à°¾à°‚à°Ÿà±â€Œà°²à± à°®à°°à°¿à°¯à± à°µà°¿à°°à°¾à°³à°¾à°² à°¦à±à°µà°¾à°°à°¾ à°¨à°¿à°§à±à°²à± à°¸à°®à°•à±‚à°°à±à°šà°¾à°°à±.",
    whichLanguagesSupported: "à° à°­à°¾à°·à°²à± à°µà°¿à°§à°¿à°šà±‡à°¯à°¬à°¡à°¤à°¾à°¯à°¿?",
    hindiEnglishTelugu: "à°¹à°¿à°‚à°¦à±€, à°†à°‚à°—à±à°²à°‚ à°®à°°à°¿à°¯à± à°¤à±†à°²à±à°—à±. à°…à°§à°¿à°• à°­à°¾à°°à°¤à±€à°¯ à°­à°¾à°·à°²à± à°¤à±à°µà°°à°²à±‹ à°µà°šà±à°šà±‡à°µà°¿.",
    doINeedAccount: "à°¨à±‡à°¨à± à°–à°¾à°¤à°¾ à°¸à±ƒà°·à±à°Ÿà°¿à°‚à°šà°¾à°²à°¿ à°¤à°ªà±à°ªà°¨à°¿à°¸à°°à°¿ à°…à°¯à°¿à°¤à±‡?",
    noForTrying: "à°¡à±†à°®à±‹à°¨à± à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°Ÿà°•à± à°²à±‡à°¦à±. à°®à±€ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà°°à°¿à°¤à±à°° à°¸à±‡à°µ à°šà±‡à°¯à±à°Ÿà°•à± à°®à°°à°¿à°¯à± à°ªà±‚à°°à±à°£ à°²à°•à±à°·à°£à°¾à°²à°•à± à°ªà±à°°à°µà±‡à°¶à°‚ à°•à±Šà°°à°•à± à°…à°µà±à°¨à±.",
    privacySecurity: "à°—à±‹à°ªà±à°¯à°¤ à°®à°°à°¿à°¯à± à°¸à±à´°à°•à±à°·à°¤",
    isMyDataSafe: "à°¨à°¾ à°¡à±‡à°Ÿà°¾ à°¸à±à°°à°•à±à°·à°¿à°¤à°®à±ˆà°¨à°¦à±‡à°¨à°¾?",
    yesWeEncrypt: "à°…à°µà±à°¨à±. à°®à±‡à°®à± à°…à°¨à±à°¨à°¿ à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°—à±à°ªà±à°¤à±€à°•à°°à°¿à°¸à±à°¤à°¾à°®à±, 30 à°°à±‹à°œà±à°² à°¤à°°à±à°µà°¾à°¤ à°¸à±à°µà°¯à°‚à°šà°¾à°²à°• à°¨à±à°‚à°¡à°¿ à°¤à±Šà°²à°—à°¿à°¸à±à°¤à°¾à°®à±, à°®à°°à°¿à°¯à± à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°‰à°®à±à°®à°¡à°¿à°—à°¾ à°ªà°‚à°šà±à°•à±‹à°¨à±‡à°¦à°¿.",
    canYouRead: "à°¨à±€à°µà± à°¨à°¾ à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°šà°¦à°µà°²à°¨à±?",
    aiAnalyzesAuto: "à°®à°¾ AI à°‡à°¦à°¿ à°¸à±à°µà°¯à°‚à°šà°¾à°²à°•à°‚à°—à°¾ à°µà°¿à°¶à±à°²à±‡à°·à°¿à°¸à±à°¤à±à°‚à°¦à°¿, à°•à°¾à°¨à±€ à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°®à°¾à°¨à°µ à°•à°¾à°¨à±€ à°®à±€ à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°šà±‚à°¸à±à°¤à±à°‚à°¦à°¿.",
    whatDoYouDo: "à°®à±€à°°à± à°…à°ªà±à°²à±‹à°¡à± à°šà±‡à°¸à°¿à°¨ à°¸à±à°•à±à°°à±€à°¨à±â€Œà°·à±‚à°Ÿà±â€Œà°²à°¨à± à°¦à±€à°¨à°¿à°¤à±‹ à°Žà°²à°¾ à°šà±‡à°¸à±à°¤à°¾à°°à±?",
    sameAsText: "à°Ÿà±†à°•à±à°¸à±à°Ÿà± à°šà±‡à°¤ - à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà±‡à°¯à°‚à°¡à°¿, à°—à±à°ªà±à°¤à±€à°•à°°à°¿à°‚à°šà°‚à°¡à°¿, à°®à°°à°¿à°¯à± 30 à°°à±‹à°œà±à°² à°¤à°°à±à°µà°¾à°¤ à°¸à±à°µà°¯à°‚à°šà°¾à°²à°• à°¨à±à°‚à°¡à°¿ à°¤à±Šà°²à°—à°¿à°‚à°šà°‚à°¡à°¿. à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°®à°¾à°¨à°µ à°ªà±à°°à°µà±‡à°¶à°‚ à°²à±‡à°¨à°¿à°¦à°¿.",
    usingSentinelAI: "SentinelAI à°‰à°ªà°¯à±‹à°—à°¿à°¸à±à°¤à°¾à°°à±",
    howAccurate: "à°†à°µà°¿à°·à±à°•à°°à°£ à°Žà°‚à°¤à°µà°°à°•à± à°–à°šà±à°šà°¿à°¤à°®à±ˆà°¨à°¦à°¿?",
    continuouslyImproving: "à°®à±‡à°®à± à°¨à°¿à°°à°‚à°¤à°°à°‚ à°®à±†à°°à±à°•à±à°ªà°°à±à°¸à±à°¤à±à°¨à±à°¨à°¾à°®à±. à°®à°¾ AI à°­à°¾à°°à°¤à°¦à±‡à°¶à°¾à°¨à°¿à°•à°¿ à°¨à°¿à°°à±à°¦à°¿à°·à±à°Ÿà°®à±ˆà°¨ à°µà±‡à°² à°¤à±†à°²à°¿à°¸à°¿à°¨ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à°®à±‚à°¨à°¾à°²à°ªà±ˆ à°¶à°¿à°•à±à°·à°£ à°šà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿.",
    whatIfSays: "à°•à±à°°à±€ à°•à°¾à°¨à±€ à°¨à°¾ à°¸à°‚à°¦à±‡à°¶à°‚ à°¸à±à°°à°•à±à°·à°¿à°¤à°®à±ˆà°¨à°¦à°¿ à°•à°¾à°¨à±€ à°¨à±‡à°¨à± à°¨à°¿à°¶à±à°šà°¿à°¤à°®à±ˆà°¨à°¨à±?",
    alwaysTrustInstinct: "à°¨à°¿à°¤à±à°¯à°‚ à°šà±‡à°¤à°¿à°ªà°Ÿà±à°Ÿà°•à± à°¨à°®à±à°®à°‚à°¡à°¿. à°à°¦à±‹ à°¤à°ªà±à°ªà±à°—à°¾ à°…à°¨à°¿à°ªà°¿à°¸à±à°¤à±‡, à°²à°‚à°•à±†à°²à°ªà±ˆ à°•à°¾à°•à±à°‚à°¡à°¾ à°²à±‡à°¦à°¾ à°à°¦à±€ à°†à°¸à±à°¤à°¿à°—à°¤ à°¸à°®à°¾à°šà°¾à°°à°¾à°¨à±à°¨à°¿ à°‰à°®à±à°®à°¡à°¿à°—à°¾ à°šà±‡à°¯à°µà°¦à±à°¦à±.",
    canIReport: "à°¨à±‡à°¨à± à°¤à°ªà±à°ªà± à°«à°²à°¿à°¤à°®à± à°²à°¨à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°¿à°¨à°¾?",
    yesPleaseUse: "à°…à°µà±à°¨à±, à°¦à°¯à°šà±‡à°¸à°¿ à°šà±‡à°¯à°‚à°¡à°¿. à°µà°¿à°¶à±à°²à±‡à°·à°£ à°¨à°¿à°µà±‡à°¦à°¿à°• à°²à±‹ à°•à°¾à°•à±à°‚à°¡à± à°¬à°Ÿà°¨à±â€Œà°¨à± à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°‚à°¡à°¿, à°‡à°¦à°¿ à°®à±†à°°à±à°•à±à°ªà°°à°‚à°œà°•à± à°¸à°¹à°¾à°¯ à°šà±‡à°¯à°‚à°¡à°¿.",
    whatIfClickedLink: "à°¨à±‡à°¨à± à°‡à°ªà±à°ªà°Ÿà°¿à°•à±‡ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°²à°‚à°•à±†à°ªà±ˆ à°¨à±Šà°•à±à°•à°¿à°¤à±‡ à° à°šà±‡à°¯à°¾à°²à°¿?",
    actImmediately: "(1) à°‡à°‚à°Ÿà°°à±à°¨à±†à°Ÿà± à°¨à±à°‚à°¡à°¿ à°¡à°¿à°¸à±â€Œà°•à°¨à±†à°•à±à°Ÿà± à°šà±‡à°¯à°‚à°¡à°¿, (2) à°¤à±†à°°à°¿à°šà°¿à°¨ à°¸à±ˆà°Ÿà±â€Œà°•à± à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¸à°®à°¾à°šà°¾à°°à°¾à°¨à±à°¨à°¿ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°µà°¦à±à°¦à±, (3) à°¬à±à°¯à°¾à°‚à°•à± à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¸à°¹à°¾à°¯ à°¨à°¿à°°à±à°¦à±‡à°¶à°¿à°• à°¨à± à°ªà°¿à°²à°µà°‚à°¡à°¿, (4) à°•à±‚à°²à± à°¸à°‚à°•à±‡à°¤à°ªà°¦à°¾à°²à± à°‰à°®à±à°®à°¡à°¿à°—à°¾ à°šà±‡à°¯à°‚à°¡à°¿, (5) 48 à°—à°‚à°Ÿà°²à± à°–à°¾à°¤à°¾à°²à°¨à± à°šà±‚à°¸à±à°•à±‹à°‚à°¡à°¿, (6) à°¸à±ˆà°¬à°°à±â€Œà°•à±à°°à±ˆà°®à±â€Œà°•à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°‚à°¡à°¿: 1930",
    canIUseWhatsapp: "à°¨à±‡à°¨à± à°‡à°¦à°¿ WhatsApp à°²à±‡à°¦à°¾ à°‡à°¤à°° à°¯à°¾à°ªà±â€Œà°²à± à°¸à°‚à°¦à±‡à°¶à°¾à°² à°•à±‹à°¸à°‚ à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà±†à°¨à±?",
    yesPasteAnyText: "à°…à°µà±à°¨à±, à°à°¦à±€ à°¦à±€à°°à±à°˜ à°¸à°‚à¶¯à±‡à°¶ à°à°¦à±€ à°ªà±à°²à°¾à°Ÿà±â€Œà°«à°¾à°‚ à°¨à±à°‚à°¡à°¿ à°…à°‚à°Ÿà°¿à°‚à°šà°‚à°¡à°¿ - SMS, WhatsApp, à°Ÿà±†à°²à°¿à°—à±à°°à°¾à°®à±, à°«à±‡à°¸à±â€Œà°¬à±à°•à±, à°ˆà°®à±†à°¯à°¿à°²à±.",
    stillHaveQuestions: "à°‡à°ªà±à°ªà°Ÿà°¿à°•à±€ à°ªà±à°°à°¶à±à°¨à°²à± à°‰à°¨à±à°¨à°µà°¾?",
    emailUs: "à°®à°®à±à°®à°²à±à°¨à°¿ à°ˆà°®à±†à°¯à°¿à°²à± à°šà±‡à°¯à°‚à°¡à°¿: support@sentinelai.com",
    responseTime: "à°ªà±à°°à°¤à°¿à°¸à±à°ªà°‚à°¦à°¨ à°¸à°®à°¯à°‚: à°¸à°¾à°§à°¾à°°à°£à°‚à°—à°¾ 24 à°—à°‚à°Ÿà°² à°¨à±à°‚à°¡à°¿",

    // Contact Page
    getTouchTitle: "à°¸à°‚à°¬à°‚à°§à°¾à°¨à±à°¨à°¿ à°ªà±Šà°‚à°¦à°‚à°¡à°¿",
    haveQuestions: "à°ªà±à°°à°¶à±à°¨à°²à± à°‰à°¨à±à°¨à°µà°¾? à°®à±‡à°®à± à°¸à°¹à°¾à°¯à°‚ à°šà±‡à°¯à°Ÿà°•à± à°‡à°•à±à°•à°¡ à°‰à°¨à±à°¨à°¾à°®à±. à°®à°®à±à°®à°²à±à°¨à°¿ à°¸à°‚à°¦à±‡à°¶à°‚ à°ªà°‚à°ªà°‚à°¡à°¿ à°®à°°à°¿à°¯à± à°®à±‡à°®à± 24 à°—à°‚à°Ÿà°² à°¨à±à°‚à°¡à°¿ à°¸à°®à°¾à°§à°¾à°¨à°‚ à°‡à°¸à±à°¤à°¾à°®à±.",
    fullName: "à°ªà±‚à°°à±à°£ à°ªà±‡à°°à± *",
    yourName: "à°®à±€ à°ªà±‡à°°à±",
    emailAddress: "à°ˆà°®à±†à°¯à°¿à°²à± à°šà°¿à°°à±à°¨à°¾à°®à°¾ *",
    youAtExample: "à°®à±€à°°à±@à°‰à°¦à°¾à°¹à°°à°£.à°•à°¾à°®à±",
    subject: "à°µà°¿à°·à°¯à°‚",
    selectSubject: "à°’à°• à°µà°¿à°·à°¯à°‚ à°Žà°¨à±à°¨à±à°•à±‹à°‚à°¡à°¿",
    generalInquiry: "à°¸à°¾à°§à°¾à°°à°£ à°ªà±à°°à°¶à±à°¨",
    technicalSupport: "à°¸à°¾à°‚à°•à±‡à°¤à°¿à°• à°¸à°®à°°à±à°¥à°¨",
    reportFalsePositive: "à°¤à°ªà±à°ªà± à°§à°¨à°¾à°¤à±à°®à°• à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°‚à°¡à°¿",
    reportScam: "à°šà±‡à°¤à°²à°¾à°ªà±à°²à°¨à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°‚à°¡à°¿",
    partnershipOpportunity: "à°­à°¾à°—à±€à°¦à°¾à°°à±€ à°…à°µà°•à°¾à°¶à°‚",
    pressMedia: "à°¨à°¿à°°à±à°®à°¾à°¤à°²à±/à°®à±€à°¡à°¿à°¯à°¾ à°¸à°®à°¸à±à°¯",
    other: "à°‡à°¤à°°à±à°²à±",
    messageLabel: "à°¸à°‚à°¦à±‡à°¶à°‚ *",
    howCanWeHelp: "à°®à±‡à°®à± à°¨à°¿à°¨à±à°¨à± à°¸à°¹à°¾à°¯à°‚ à°šà±‡à°¯à°Ÿà°•à± à°Žà°²à°¾?",
    sendMessage: "à°¸à°‚à°¦à±‡à°¶ à°ªà°‚à°ªà°‚à°¡à°¿",
    responseTimeContact: "à°¸à°¾à°§à°¾à°°à°£à°‚à°—à°¾ 24 à°—à°‚à°Ÿà°² à°¨à±à°‚à°¡à°¿",
    mondayFriday: "à°¸à±‹à°®à°µà°¾à°°à°‚-à°¶à±à°•à±à°°à°µà°¾à°°à°‚, à¤¸à¥à¤¬à¤¹ 9 à°¬à°¿à°œà±†à°Ÿ - à°¸à°¾à°¯à°‚à°¤à±à°°à°‚ 6 à°¬à°¿à°œà±†à°Ÿà± IST",
    alreadyBeenScammed: "à°‡à°ªà±à°ªà°Ÿà°¿à°•à±€ à°šà±‡à°¤à°²à°¾à°ªà±à°²à°•à± à°ªà°²à°¿à°•à°¿à°‚à°¦à°¾?",
    dontWaitReport: "à°¸à°®à±€à°•à±à°· à°šà±‡à°¯à°µà°¦à±à°¦à± - à°¤à°•à±à°·à°£ à°…à°§à°¿à°•à°¾à°°à±à°²à°•à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°‚à°¡à°¿:",
    cyberCrimeHelpline: "à°¸à±ˆà°¬à°°à±â€Œà°•à±à°°à±ˆà°®à± à°¸à°¹à°¾à°¯ à°¨à°¿à°°à±à°¦à±‡à°¶à°¿à°•: 1930",
    available24By7: "24/7 à°²à°­à±à°¯à°®à±ˆà°¨à°¦à°¿ â€¢ à°¤à°•à±à°·à°£ à°¬à±à°¯à°¾à°‚à°•à±à°¨à± à°ªà°¿à°²à°µà°‚à°¡à°¿",
    connectWithUs: " marÃ­a à°¸à°‚à°¬à°‚à°§à°‚ à°ªà±Šà°‚à°¦à°‚à°¡à°¿",

    // FAQ Page
    faqTitle: "à°¤à°°à°šà±à°—à°¾ à°ªà±‚à°¡à°¿à°¨ à°ªà±à°°à°¶à±à°¨à°²à±",
    whatIsSmishing: "à°¸à±à°®à°¿à°·à°¿à°‚à°—à± à°à°®à°¿à°Ÿà°¿ à°®à°°à°¿à°¯à± à°‡à°¦à°¿ à°Žà°²à°¾ à°ªà°¨à°¿à°šà±‡à°¸à±à°¤à±à°‚à°¦à°¿?",
    smishingDef: "à°¸à±à°®à°¿à°·à°¿à°‚à°—à± SMS à°«à°¿à°·à°¿à°‚à°—à± - à°µà±à°¯à°•à±à°¤à°¿à°—à°¤ à°¸à°®à°¾à°šà°¾à°°à°‚ à°²à±‡à°¦à°¾ à°¨à°¿à°§à±à°²à°¨à± à°¦à±Šà°‚à°—à°¿à°²à°¿à°‚à°šà°Ÿà°•à± à°°à±‚à°ªà±Šà°‚à°¦à°¿à°‚à°šà°¿à°¨ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°µà°šà°¨à°®à±ˆà°¨ à°¸à°‚à°¦à±‡à°¶à°¾à°²à±. à°¸à±à°•à±à¦¯à°¾à°®à°°à±â€Œà°²à± à°¬à±à°¯à°¾à°‚à°•à±à°²à±, à°ªà±à°°à°­à±à°¤à±à°µ à°à°œà±†à°¨à±à°¸à±€à°²à± à°²à±‡à°¦à°¾ à°•à°‚à°ªà±†à°¨à±€à°²à°¨à± à°¸à±‚à°šà°¿à°¸à±à°¤à°¾à°°à±, à°šà±‡à°¤à°²à°¾à°ªà±à°² à°²à°‚à°•à±†à°² à°ªà±ˆ à°•à±à¦²à°¿à°•à± à°šà±‡à°¯à°Ÿà°•à± à°²à±‡à°¦à°¾ à°¸à±à°¨à±à°¨à°¿à°¤à°®à±ˆà°¨ à°¡à±‡à°Ÿà°¾ à°‰à°®à±à°®à°¡à°¿ à°šà±‡à°¯à±à°Ÿà°•à± à°®à±€à°°à± à°‡à°Ÿà±à°µà°‚à°Ÿà°¿ à°šà±‡à°¸à±à°¤à°¾à°¯à°¿.",
    howAccurateIs: "à°®à±€ à°†à°µà°¿à°·à±à°•à°°à°£ à°µà±à°¯à°µà°¸à±à°¥ à°Žà°‚à°¤à°µà°°à°•à± à°–à°šà±à°šà°¿à°¤à°®à±ˆà°¨à°¦à°¿?",
    accuracyDef: "à°®à°¾ AI 98% à°–à°šà±à°šà°¿à°¤à°¤à±à°µà°‚ à°¦à±à°µà°¾à°°à°¾ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà±‡à°¸à±à°¤à±à°‚à°¦à°¿. à°®à±‡à°®à± à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚à°²à±‹ à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°¿à°¨ à°•à±Šà°¤à±à°¤ à°šà±‡à°¤à°²à°¾à°ªà±à°² à°ªà°¦à±à°§à°¤à±à°²à°ªà±ˆ à°¨à°¿à°°à°‚à°¤à°°à°‚ à°¶à°¿à°•à±à°·à°£ à°šà±‡à°¸à±à°¤à°¾à°®à±.",
    isReallyFree: "à°ˆ à°¸à±‡à°µ à°¨à°¿à°œà°‚à°—à°¾ à°¨à°¿à°°à±à°ªà°¯à±‹à°—à°®à±ˆà°¨à°¦à±‡à°¨à°¾?",
    freeAnswer: "à°…à°µà±à°¨à±! SentinelAI à°ªà±‚à°°à±à°¤à°¿à°—à°¾ à°‰à°šà°¿à°¤à°‚. à°®à°¾ à°²à°•à±à°·à±à°¯ SMS à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à±à°‚à°¡à°¿ à°—à±à°°à°¾à°®à±€à°£ à°­à°¾à°°à°¤à°¿à°¨à°¿ à°°à°•à±à°·à°¿à°‚à°šà±à°•à±‹à°µà°¡à°‚, à°²à°¾à°­à°‚ à°•à°¾à°¦à±.",
    languagesSupported: "à° à°­à°¾à°·à°²à± à°µà°¿à°§à°¿à°šà±‡à°¯à°¬à°¡à°¤à°¾à°¯à°¿?",
    languagesAnswer: "à°®à±‡à°®à± à°†à°‚à°—à±à°²à°‚, à°¹à°¿à°‚à°¦à±€ (à°¹à°¿à°‚à°¦à±€), à°®à°°à°¿à°¯à± à°¤à±†à°²à±à°—à± (à°¤à±†à°²à±à°—à±) à°—à°¾ à°…à°‚à°¦à°¿à°‚à°šà°¾à°®à±. à°…à°§à°¿à°• à°ªà±à°°à°¾à°‚à°¤à±€à°¯ à°­à°¾à°·à°²à± à°¤à±à°µà°°à°²à±‹ à°µà°šà±à°šà±‡à°µà°¿!",
    dataSecurePrivate: "à°¨à°¾ à°¡à±‡à°Ÿà°¾ à°¸à±à°°à°•à±à°·à°¿à°¤à°®à±ˆà°¨à°¦à°¿ à°®à°°à°¿à°¯à± à°‰à°®à±à°®à°¡à°¿à°—à°¾ à°šà±‡à°¯à°¬à°¡à°¿à°¨à°¦à±‡à°¨à°¾?",
    dataSecureAnswer: "à°¸à°—à°Ÿà°‚à°—à°¾. à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°—à±à°ªà±à°¤à±€à°•à°°à°¿à°¸à±à°¤à°¾à°°à±, à°¸à±à°¦à±‚à°° à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà±‡à°¸à±à°¤à°¾à°°à±, à°®à°°à°¿à°¯à± 30 à°°à±‹à°œà±à°² à°¤à°°à±à°µà°¾à°¤ à°¸à±à°µà°¯à°‚à°šà°¾à°²à°• à°¨à±à°‚à°¡à°¿ à°¤à±Šà°²à°—à°¿à°¸à±à°¤à°¾à°°à±. à°®à±‡à°®à± à°Žà°Ÿà±à°µà°‚à°Ÿà°¿ à°¡à±‡à°Ÿà°¾ à°‰à°®à±à°®à°¡à°¿à°—à°¾ à°šà±‡à°¯à°¨à±‡à°¦à°¿.",
    whatIfFellForScam: "à°¨à±‡à°¨à± à°‡à°ªà±à°ªà°Ÿà°¿à°•à±€ à°šà±‡à°¤à°²à°¾à°ªà±à°²à°•à± à°•à°¿à°‚à°¦ à°•à±‚à°°à±à°•à±‹à°µà°Ÿà°•à± à°‰à°‚à°¡à°¿à°¤à±‡ à° à°šà±‡à°¯à°¾à°²à°¿?",
    scamReaction: "(1) à°–à°¾à°¤à°¾à°²à°¨à± à°¤à°—à±à°—à°¿à°‚à°šà°Ÿà°•à± à°¬à±à°¯à°¾à°‚à°•à±à°¨à± à°Žà°•à±à°•à°°à±à°µà°¾ à°•à°¿à°²à°µà°‚à°¡à°¿, (2) à°¸à±ˆà°¬à°°à±â€Œà°•à±à°°à±ˆà°®à±â€Œ à°¸à°¹à°¾à°¯ à°¦à±‚à°°à°µà°¾à°£à±€ 1930 à°•à± à°¨à°¿à°µà±‡à°¦à°¿à°‚à°šà°‚à°¡à°¿, (3) à°¸à°‚à°•à±‡à°¤à°ªà°¦à°¾à°²à± à°¸à°®à°•à±‚à°°à±à°šà±à°•à±‹à°‚à°¡à°¿, (4) cybercrime.gov.in à°¨à°‚à°¦à± à°•à±à¤·à°¤à°¿à°ªà±‚à°°à°£ à°¨à°®à±‹à°¦à± à°šà±‡à°¯à°‚à°¡à°¿",

    // Demo Page
    demoIntro: "à°‡à°¦à°¿ à°’à°• à°¨à°®à±‚à°¨à°¾ à°¸à°‚à°¦à±‡à°¶ à°•à°¤ à°¡à±†à°®à±‹. à°®à±€ à°¸à±à°µà°‚à°¤ à°¸à°‚à°¦à±‡à°¶à°¾à°²à°¨à± à°µà°¿à°¶à±à°²à±‡à°·à°£ à°šà±‡à°¯à°Ÿà°•à± à°¸à°‚à°¤à°•à°‚ à°šà±‡à°¯à°‚à°¡à°¿.",
    signUpFree: "à°‰à°šà°¿à°¤à°‚à°—à°¾ à°¸à°‚à°¤à°•à°‚ à°šà±‡à°¯à°‚à°¡à°¿",
    tryDemoAnalysis: "à°¡à±†à°®à±‹ à°µà°¿à°¶à±à°²à±‡à°·à°£ à°ªà±à°°à°¯à°¤à±à°¨à°¿à°‚à°šà°‚à°¡à°¿",
    demoAnalysesRemaining: "à°¡à±†à°®à±‹ à°µà°¿à°¶à±à°²à±‡à°·à°£à°²à± à°¨à°¿à°²à±à°µ. à°…à°¨à°‚à°¤ à°ªà±à°°à°µà±‡à°¶à°‚ à°•à±‹à°¸à°‚ à°¸à°‚à°¤à°•à°‚ à°šà±‡à°¯à°‚à°¡à°¿.",
    sendersNumber: "à°ªà±à°°à±‡à°°à°£à°•à°°à±à°¤ à°¸à°‚à°–à±à°¯",
    messageText: "à°¸à°‚à°¦à±‡à°¶ à°µà°šà°¨à°‚",
    sampleMessage: "à°µà±‡à°—à°µà°‚à°¤à°®à±ˆà°¨à°¦à°¿: à°®à±€ SBI à°–à°¾à°¤à°¾ KYC à°§à±ƒà°µà±€à°•à°°à°£ à°•à°¾à°°à°£à°‚à°—à°¾ à°…à°¸à±à°¥à°¿à°°à°‚à°—à°¾ à°¨à°¿à°²à°¿à°ªà°¿à°µà±‡à°¯à°¬à°¡à°¿à°‚à°¦à°¿. à°¤à°•à±à°·à°£ à°§à±ƒà°µà±€à°•à°°à°¿à°‚à°šà°Ÿà°•à± à°‡à°•à±à°•à°¡ à°¨à±Šà°•à±à°•à°‚à°¡à°¿: bit.ly/sbi-kyc-2024 à°²à±‡à°¦à°¾ à°®à±€ à°–à°¾à°¤à°¾ 24 à°—à°‚à°Ÿà°²à±à°²à±‹ à°®à±‚à°¸à°¿à°µà±‡à°¯à°¬à°¡à±à°¤à±à°‚à°¦à°¿. à°•à°¸à±à°®à°°à± à°¸à±‡à°µ: 1800-XXXX",
    analyzingContent: "à°¸à°‚à°¦à±‡à°¶ à°¸à°¾à°®à°—à±à°°à°¿à°¨à°¿ à°µà°¿à°¶à±à°²à±‡à°·à°¿à°¸à±à°¤à±à°¨à±à°¨à°¾à°¨à±...",
    checkingSender: "à°ªà±à°°à±‡à°°à°£à°•à°°à±à°¤ à°–à±à°¯à°¾à°¤à°¿à°¨à°¿ à°ªà°°à±€à°•à±à°·à°¿à°¸à±à°¤à±à°¨à±à°¨à°¾à°¨à±...",
    scanningMalicious: "à°¦à±à°°à±à°­à°¾à°· à°²à°‚à°•à±†à°² à°•à±‹à°¸à°‚ à°¸à±à°•à°¾à°¨à± à°šà±‡à°¸à±à°¤à±à°¨à±à°¨à°¾à°®à±...",
    generatingReport: "à°à±à°‚à°¦à±à°µ à°¨à°¿à°µà±‡à°¦à°¿à°•à°¨à± à°‰à°¤à±à°ªà°¤à±à°¤à°¿ à°šà±‡à°¸à±à°¤à±à°¨à±à°¨à°¾à°®à±...",
    likelySmishing: "à°ˆ à°¸à°‚à°¦à±‡à°¶ à°¸à°‚à°­à°µà°¤à°ƒ à°¸à±à°®à°¿à°·à°¿à°‚à°—à± à°ªà±à°°à°¯à°¤à±à°¨à°‚",
    doNotClickLinksDemo: "à°²à°‚à°•à±†à°² à°¨à±à°‚à°¡à°¿ à°¨à±Šà°•à±à°•à°µà°¦à±à°¦à± à°²à±‡à°¦à°¾ à°†à°¸à±à°¤à°¿à°—à°¤ à°¸à°®à°¾à°šà°¾à°°à°¾à°¨à±à°¨à°¿ à°‰à°®à±à°®à°¡à°¿à°—à°¾ à°šà±‡à°¯à°µà°¦à±à°¦à±",
    suspiciousLinkDetectedDemo: "à°…à°¨à±à°®à°¾à°¨à°¾à°¸à±à°ªà°¦ à°²à°‚à°•à±† à°•à°¨à±à°—à±Šà°¨à°¬à°¡à°¿à°‚à°¦à°¿",
    containsShortened: "à°¸à°‚à°•à±à°·à°¿à°ªà±à°¤ URL (bit.ly) à°•à°²à°¿à°¸à°¿à°¨",
    urgencyTacticsDemo: "à°¤à°•à±à°·à°£ à°¸à°‚à°°à°£à°²à±",
    createsArtificial: "à°•à±ƒà°¤à±à°°à°¿à°® à°¸à°®à°¯ à°†à°‚à°¦à±‹à°³à°¨ à°¸à±ƒà°·à±à°Ÿà°¿à°¸à±à°¤à±à°‚à°¦à°¿ (24 à°—à°‚à°Ÿà°²à±)",
    bankImpersonation: "à°¬à±à°¯à°¾à°‚à°•à± à°‡à°®à°¿à°Ÿà±‡à°·à°¨à±",
    pretendsSbi: "SBI à°¨à±à°‚à°¡à°¿ à°šà±†à°ªà±à°ªà±à°•à±à°‚à°Ÿà±à°‚à°¦à°¿",
    kycScamPattern: "KYC à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à°®à±‚à°¨à°¾",
    matchesKnownKyc: "à°¤à±†à°²à°¿à°¸à°¿à°¨ KYC à°šà±‡à°¤à°²à°¾à°ªà±à°² à°¨à°®à±‚à°¨à°¾ à°–à°šà±à°šà°¿à°¤à°®à±ˆà°¨",
    analysisCompleteDemo: "à°µà°¿à°¶à±à°²à±‡à°·à°£ à°ªà±‚à°°à±à°£",
    riskLevelDemo: "à°à±à°‚à°¦à±à°µ à°¸à±à°¥à°¿à°¤à°¿: à°Žà°•à±à°•à±à°µ (92/100)",

    // Terms Page
    termsOfService: "à°¸à±‡à°µ à°¨à°¿à°¯à°®à°¾à°²à±",
    termsLastUpdated: "à°šà°¿à°µà°°à°¿à°—à°¾ à°¨à°µà±€à°•à°°à°£: à°œà°¨à°µà°°à°¿ 7, 2026",

    // Privacy Page
    privacyPolicy: "à°—à±‹à°ªà±à°¯à°¤à°¾ à°µà°¿à°§à°¾à°¨à°‚",
    privacyLastUpdated: "à°šà°¿à°µà°°à°¿à°—à°¾ à°¨à°µà±€à°•à°°à°£: à°œà°¨à°µà°°à°¿ 7, 2026",

    // Data Security Page
    dataSecurity: "à°¡à±‡à°Ÿà°¾ à°¸à¥à¤°à¤•à¥à¤·à¤¾",
    securityLastUpdated: "à°šà°¿à°µà°°à°¿à°—à°¾ à°¨à°µà±€à°•à°°à°£: à°œà°¨à°µà°°à°¿ 7, 2026",
    endToEndEncryption: "à°šà°¿à°µà°° à°¨à±à°‚à°¡à°¿ à°šà°¿à°µà°° à°—à±à°ªà±à°¤à±€à°•à°°à°£",
    tlsDescription: "SentinelAI à°¨à±à°‚à°¡à°¿ à°®à°°à°¿à°¯à± à°¨à±à°‚à°¡à°¿ à°¸à°­à±à°¯ à°¡à±‡à°Ÿà°¾ TLS 1.3 à°¨à± à°‰à°ªà°¯à±‹à°—à°¿à°‚à°šà°¿ à°—à±à°ªà±à°¤à±€à°•à°°à°¿à°¸à±à°¤à°¾à°°à±",
    secureInfrastructure: "à°¸à±à°°à°•à±à°·à°¿à°¤ à°¸à°‚à°°à°šà°¨",
    socCompliant: "à°®à°¾ à°¸à°°à±à°µà°°à±â€Œà°²à± à°­à°¾à°°à°¤à°¦à±‡à°¶à°‚à°²à±‹ SOC 2 à°…à°¨à±à°•à±‚à°² à°¡à±‡à°Ÿà°¾ à°•à±‡à°‚à°¦à±à°°à°¾à°²à°²à±‹ à°¸à±à°¥à°¿à°°à°ªà°°à°šà°¾à°°à±",
    privacyByDesign: "à°¡à°¿à°œà±ˆà°¨à± à°¦à±à°µà°¾à°°à°¾ à°—à±‹à°ªà±à°¯à°¤",
    collectEssentialOnly: "à°®à±‡à°®à± à°•à±‡à°µà°²à°‚ à°…à°µà°¸à°° à°¡à±‡à°Ÿà°¾ à°¸à±‡à°•à°°à°£ à°šà±‡à°¸à±à°¤à°¾à°®à± à°®à°°à°¿à°¯à± à°¸à°¾à°§à±à°¯à°®à±ˆà°¨à°‚à°¤à°µà°°à°•à± à°—à±à°®à±à°®à°¾à°°à±à°¬à°¾à°°à± à°šà±‡à°¸à±à°¤à°¾à°®à±",
    accessControls: "à°ªà±à°°à°µà±‡à°¶ à°¨à°¿à°¯à°‚à°¤à±à°°à°£à°²à±",
    roleBasedAccess: "à°•à° à±‹à°° à°­à±‚à°®à°¿à°•-à°†à°§à°¾à°°à°¿à°¤ à°ªà±à°°à°µà±‡à°¶ à°¨à°¿à°¯à°‚à°¤à±à°°à°£à°²à± à°®à±€ à°¡à±‡à°Ÿà°¾ à°…à°‚à°¤à°°à±à°—à°¤à°‚à°—à°¾ à°¸à±à°°à°•à±à°·à°¿à°¸à±à°¤à°¾à°°à±",
    encryptionPractices: "à°—à±à°ªà±à°¤à±€à°•à°°à°£ à°†à°šà°°à°£à°²à±",
    industryLeadingStandards: "à°®à±‡à°®à± à°¶à°¿à°²à±à°ª-à°‰à°¨à±à°¨à°¤à°®à±ˆà°¨ à°—à±à°ªà±à°¤à±€à°•à°°à°£ à°ªà±à°°à°®à°¾à°£à°¾à°²à°¨à± à°†à°‚à°¦à±‹à°³à°¨à°‚ à°šà±‡à°¸à±à°¤à°¾à°®à±:",
    tlsInTransit: "à°¸à°­à±à°¯ à°¡à±‡à°Ÿà°¾-à°‡à°¨-à°Ÿà±à°°à°¾à°¨à±â€Œà°œà°¿à°Ÿà± à°•à±‹à°¸à°‚ à°Ÿà±€à°Žà°²à±â€Œà°Žà°¸à± 1.3",
    aes256Rest: "à°µà°¿à°¶à±à°°à°®à°¿à°‚à°šà°¿à°¨ à°¡à±‡à°Ÿà°¾ à°•à±‹à°¸à°‚ AES-256 à°—à±à°ªà±à°¤à±€à°•à°°à°£",
    secureKeyManagement: "à°¸à°¾à°§à°¾à°°à°£ à°µà°°à±à°¤à°¨à°¾à°¸à°¹à±à°¯à°‚ à°•à±‹à°¸à°‚ à°¸à±à°°à°•à±à°·à°¿à°¤ à°¸à°‚à°•à±‡à°¤ à°¨à°¿à°°à±à°µà°¹à°£",
    perfectForward: "à°¸à°‚à°šà°¾à°° à°¸à±†à°·à°¨à±â€Œà°² à°•à±‹à°¸à°‚ à°–à°šà±à°šà°¿à°¤ à°«à°¾à°°à°µà°¾à°°à±à°¡à± à°—à±‹à°ªà±à°¯à°¤",
    complianceStandards: "à°…à°¨à±à°¸à°°à°£ à°ªà±à°°à°®à°¾à°£à°¾à°²à±",
    adheres: "SentinelAI à°ˆà°®à°¾à°Ÿà°¿à°•à±€ à°…à°‚à°—à±€à°•à°°à°¿à°¸à±à°¤à±à°‚à°¦à°¿:",
    itAct: "à°¸à°®à°¾à°šà°¾à°°à°‚ à°¸à°¾à°‚à°•à±‡à°¤à°¿à°• à°•à¤¾à¤¨à¥‚à¤¨, 2000 (à°­à°¾à°°à°¤)",
    personalDataProtection: "à°µà±à°¯à°•à±à°¤à°¿à°—à°¤ à°¡à±‡à°Ÿà°¾ à°¸à±à¤°à°•à¥à¤·à¤¾ à°®à°¾à°°à±à°—à°¦à°°à±à°¶à°•à°¾à°²à±",
  },
  marathi: {
    // Risk Score Section
    riskLevel: "à¤œà¥‹à¤–à¥€à¤® à¤¸à¥à¤¤à¤°",
    high: "à¤‰à¤šà¥à¤š",
    medium: "à¤®à¤§à¥à¤¯à¤®",
    low: "à¤•à¤®",
    confidence: "à¤†à¤¤à¥à¤®à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸",
    
    // Verdict Section
    verdict: "à¤¨à¤¿à¤°à¥à¤£à¤¯",
    recommendedAction: "à¤†à¤ªà¤£ à¤•à¤¾à¤¯ à¤•à¤°à¤¾à¤µà¥‡",
    verdictHigh: "à¤¹à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤¸à¥à¤®à¤¿à¤¶à¤¿à¤‚à¤— à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤…à¤¸à¥‚ à¤¶à¤•à¤¤à¥‹",
    verdictMedium: "à¤¯à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶à¤¾à¤¤ à¤•à¤¾à¤¹à¥€ à¤¸à¤‚à¤¶à¤¯à¤¾à¤¸à¥à¤ªà¤¦ à¤µà¥ˆà¤¶à¤¿à¤·à¥à¤Ÿà¥à¤¯à¥‡ à¤†à¤¹à¥‡à¤¤",
    verdictLow: "à¤¹à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¤¾à¤¯à¤¦à¥‡à¤¶à¥€à¤° à¤…à¤¸à¤²à¥à¤¯à¤¾à¤šà¥‡ à¤¦à¤¿à¤¸à¤¤à¥‡",
    actionHigh: "à¤²à¤¿à¤‚à¤•à¤µà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‚ à¤¨à¤•à¤¾ à¤•à¤¿à¤‚à¤µà¤¾ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤¶à¥‡à¤…à¤° à¤•à¤°à¥‚ à¤¨à¤•à¤¾",
    actionMedium: "à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¦à¥‡à¤£à¥à¤¯à¤¾à¤ªà¥‚à¤°à¥à¤µà¥€ à¤…à¤§à¤¿à¤•à¥ƒà¤¤ à¤šà¥…à¤¨à¤²à¤¦à¥à¤µà¤¾à¤°à¥‡ à¤ªà¥à¤°à¥‡à¤·à¤• à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¤¾",
    actionLow: "à¤ªà¥à¤¢à¥‡ à¤œà¤¾à¤£à¥‡ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤†à¤¹à¥‡, à¤ªà¤°à¤‚à¤¤à¥ à¤¨à¥‡à¤¹à¤®à¥€ à¤¸à¤¾à¤µà¤§à¤¾à¤¨ à¤°à¤¹à¤¾",
    
    // Threat Section (risk-conditional titles)
    whyDangerous: "à¤¹à¥‡ à¤§à¥‹à¤•à¤¾à¤¦à¤¾à¤¯à¤• à¤•à¤¾ à¤†à¤¹à¥‡?",
    proceedWithCaution: "à¤¸à¤¾à¤µà¤§à¤¾à¤¨à¥€à¤¨à¥‡ à¤ªà¥à¤¢à¥‡ à¤œà¤¾",
    thingsToNote: "à¤²à¤•à¥à¤·à¤¾à¤¤ à¤˜à¥‡à¤£à¥à¤¯à¤¾à¤šà¥à¤¯à¤¾ à¤—à¥‹à¤·à¥à¤Ÿà¥€",
    threatIndicators: "à¤§à¥‹à¤•à¤¾ à¤¸à¥‚à¤šà¤• à¤¸à¤¾à¤ªà¤¡à¤²à¥‡",
    suspiciousLinkDetected: "à¤¸à¤‚à¤¶à¤¯à¤¾à¤¸à¥à¤ªà¤¦ à¤²à¤¿à¤‚à¤• à¤¸à¤¾à¤ªà¤¡à¤²à¥€",
    suspiciousLinkDesc: "à¤¸à¤‚à¤¦à¥‡à¤¶à¤¾à¤¤ à¤à¤• à¤²à¤¹à¤¾à¤¨ à¤•à¤¿à¤‚à¤µà¤¾ à¤¸à¤‚à¤¶à¤¯à¤¾à¤¸à¥à¤ªà¤¦ URL à¤†à¤¹à¥‡",
    urgencyTactics: "à¤¤à¤¾à¤¤à¤•à¤¾à¤³à¥€à¤¨ à¤°à¤£à¤¨à¥€à¤¤à¥€ à¤¸à¤¾à¤ªà¤¡à¤²à¥€",
    urgencyTacticsDesc: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥ƒà¤¤à¥à¤°à¤¿à¤® à¤µà¥‡à¤³à¥‡à¤šà¤¾ à¤¦à¤¬à¤¾à¤µ à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤•à¤°à¤¤à¥‹",
    infoRequest: "à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤µà¤¿à¤¨à¤‚à¤¤à¥€ (à¤§à¥‹à¤•à¤¾ à¤šà¤¿à¤¨à¥à¤¹)",
    infoRequestDesc: "OTP/PIN à¤¸à¤¾à¤°à¤–à¥à¤¯à¤¾ à¤¸à¤‚à¤µà¥‡à¤¦à¤¨à¤¶à¥€à¤² à¤®à¤¾à¤¹à¤¿à¤¤à¥€à¤¸à¤¾à¤ à¥€ à¤µà¤¿à¤šà¤¾à¤°à¤¤à¥‡",
    unknownSender: "à¤…à¤œà¥à¤žà¤¾à¤¤ à¤ªà¥à¤°à¥‡à¤·à¤•",
    unknownSenderDesc: "à¤¨à¤‚à¤¬à¤° à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¸à¤‚à¤ªà¤°à¥à¤•à¤¾à¤‚à¤®à¤§à¥à¤¯à¥‡ à¤¨à¤¾à¤¹à¥€",
    
    // Recommendations
    whatToDo: "à¤†à¤ªà¤£ à¤•à¤¾à¤¯ à¤•à¤°à¤¾à¤µà¥‡?",
    immediateActions: "à¤¤à¤¾à¤¤à¤•à¤¾à¤³ à¤•à¥ƒà¤¤à¥€",
    doNot: "à¤¹à¥‡ à¤•à¤°à¥‚ à¤¨à¤•à¤¾",
    ifAlreadyClicked: "à¤œà¤° à¤†à¤ªà¤£ à¤†à¤§à¥€à¤š à¤•à¥à¤²à¤¿à¤• à¤•à¥‡à¤²à¥‡ à¤•à¤¿à¤‚à¤µà¤¾ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤¶à¥‡à¤…à¤° à¤•à¥‡à¤²à¥€",
    
    deleteMessage: "à¤¹à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤†à¤¤à¤¾ à¤¹à¤Ÿà¤µà¤¾",
    blockNumber: "à¤¹à¤¾ à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤¬à¥à¤²à¥‰à¤• à¤•à¤°à¤¾",
    tellFriends: "3 à¤®à¤¿à¤¤à¥à¤°à¤¾à¤‚à¤¨à¤¾ à¤¯à¤¾ à¤˜à¥‹à¤Ÿà¤¾à¤³à¥à¤¯à¤¾à¤¬à¤¦à¥à¤¦à¤² à¤¸à¤¾à¤‚à¤—à¤¾",
    callBank: "à¤†à¤µà¤¶à¥à¤¯à¤• à¤…à¤¸à¤²à¥à¤¯à¤¾à¤¸ à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¬à¤à¤•à¥‡à¤²à¤¾ à¤•à¥‰à¤² à¤•à¤°à¤¾",
    bankHelpline: "à¤¬à¤à¤• à¤«à¥à¤°à¥‰à¤¡ à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨: 1800-XXX-XXXX",
    
    dontClickLinks: "à¤¸à¤‚à¤¦à¥‡à¤¶à¤¾à¤¤à¥€à¤² à¤•à¥‹à¤£à¤¤à¥à¤¯à¤¾à¤¹à¥€ à¤²à¤¿à¤‚à¤•à¤µà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‚ à¤¨à¤•à¤¾",
    dontShareOTP: "OTP à¤•à¤¿à¤‚à¤µà¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤•à¥‹à¤£à¤¾à¤¸à¤¹à¥€ à¤¶à¥‡à¤…à¤° à¤•à¤°à¥‚ à¤¨à¤•à¤¾",
    dontCallBack: "à¤¨à¤‚à¤¬à¤°à¤µà¤° à¤µà¤¾à¤ªà¤¸ à¤•à¥‰à¤² à¤•à¤°à¥‚ à¤¨à¤•à¤¾",
    dontSendMoney: "à¤ªà¥ˆà¤¸à¥‡ à¤ªà¤¾à¤ à¤µà¥‚ à¤¨à¤•à¤¾",
    
    callBankImmediately: "à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¬à¤à¤•à¥‡à¤²à¤¾ à¤²à¤—à¥‡à¤š à¤•à¥‰à¤² à¤•à¤°à¤¾: 1800-XXX-XXXX",
    reportCyberCrime: "à¤¸à¤¾à¤¯à¤¬à¤° à¤•à¥à¤°à¤¾à¤‡à¤®à¤²à¤¾ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¤¾: 1930",
    blockCard: "à¤¬à¤à¤• à¤à¤ªà¤¦à¥à¤µà¤¾à¤°à¥‡ à¤†à¤ªà¤²à¤¾ à¤•à¤¾à¤°à¥à¤¡ à¤¬à¥à¤²à¥‰à¤• à¤•à¤°à¤¾",
    changePasswords: "à¤†à¤¤à¤¾ à¤¸à¤°à¥à¤µ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¤¾",
    
    // Save & Share
    saveAnalysis: "à¤¹à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¸à¥‡à¤µà¥à¤¹ à¤•à¤°à¤¾",
    keepEvidence: "à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤•à¤¿à¤‚à¤µà¤¾ à¤‡à¤¤à¤°à¤¾à¤‚à¤¨à¤¾ à¤‡à¤¶à¤¾à¤°à¤¾ à¤¦à¥‡à¤£à¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤ªà¥à¤°à¤¾à¤µà¥‡ à¤ à¥‡à¤µà¤¾",
    downloadPDF: "PDF à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¤¾",
    shareAnalysis: "à¤¹à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤¶à¥‡à¤…à¤° à¤•à¤°à¤¾",
    copyLink: "à¤²à¤¿à¤‚à¤• à¤•à¥‰à¤ªà¥€ à¤•à¤°à¤¾",
    
    // Share Modal
    shareFormat: "à¤¶à¥‡à¤…à¤° à¤«à¥‰à¤°à¥à¤®à¥…à¤Ÿ",
    fullReport: "à¤¸à¤‚à¤ªà¥‚à¤°à¥à¤£ à¤…à¤¹à¤µà¤¾à¤² - à¤¤à¤ªà¤¶à¥€à¤²à¤µà¤¾à¤° à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    quickWarning: "à¤¦à¥à¤°à¥à¤¤ à¤šà¥‡à¤¤à¤¾à¤µà¤£à¥€ - à¤®à¥à¤–à¥à¤¯ à¤®à¥à¤¦à¥à¤¦à¥à¤¯à¤¾à¤‚à¤¸à¤¹ à¤¸à¤¾à¤°à¤¾à¤‚à¤¶",
    anonymous: "à¤…à¤¨à¤¾à¤®à¤¿à¤• - à¤•à¥‹à¤£à¤¤à¥€ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤¨à¤¾à¤¹à¥€",
    shareVia: "à¤¯à¤¾à¤¦à¥à¤µà¤¾à¤°à¥‡ à¤¶à¥‡à¤…à¤° à¤•à¤°à¤¾",
    preview: "à¤ªà¥‚à¤°à¥à¤µà¤¾à¤µà¤²à¥‹à¤•à¤¨",
    privacyNotice: "à¤†à¤ªà¤²à¥€ à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤¶à¥‡à¤…à¤° à¤•à¥‡à¤²à¥€ à¤œà¤¾à¤£à¤¾à¤° à¤¨à¤¾à¤¹à¥€",
    linkCopied: "à¤²à¤¿à¤‚à¤• à¤•à¥‰à¤ªà¥€ à¤•à¥‡à¤²à¥€! 7 à¤¦à¤¿à¤¨à¤¾à¤‚à¤¸à¤¾à¤ à¥€ à¤µà¥ˆà¤§",
    generateLink: "à¤¶à¥‡à¤…à¤° à¤²à¤¿à¤‚à¤• à¤¤à¤¯à¤¾à¤° à¤•à¤°à¤¾",
    
    // Chatbot
    askAnything: "à¤®à¤²à¤¾ à¤•à¤¾à¤¹à¥€ à¤µà¤¿à¤šà¤¾à¤°à¤¾",
    typeQuestion: "à¤†à¤ªà¤²à¤¾ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤Ÿà¤¾à¤‡à¤ª à¤•à¤°à¤¾...",
    
    // Quick Questions
    whyRisky: "à¤¹à¥‡ à¤•à¤¾ à¤œà¥‹à¤–à¤®à¥€à¤šà¥‡ à¤®à¤¾à¤¨à¤²à¥‡ à¤œà¤¾à¤¤à¥‡?",
    whatIfClicked: "à¤œà¤° à¤®à¥€ à¤†à¤§à¥€à¤š à¤²à¤¿à¤‚à¤•à¤µà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¥‡à¤²à¥‡ à¤¤à¤°?",
    howToReport: "à¤®à¥€ à¤¯à¤¾à¤²à¤¾ à¤ªà¥‹à¤²à¤¿à¤¸à¤¾à¤‚à¤¨à¤¾ à¤•à¤¸à¥‡ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‚?",
    whatIfSharedOTP: "à¤œà¤° à¤®à¥€ à¤®à¤¾à¤à¤¾ OTP à¤¶à¥‡à¤…à¤° à¤•à¥‡à¤²à¤¾ à¤¤à¤°?",
    
    // Sender Analysis
    senderAnalysis: "à¤ªà¥à¤°à¥‡à¤·à¤• à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    phoneNumber: "à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤°",
    inContacts: "à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¸à¤‚à¤ªà¤°à¥à¤•à¤¾à¤‚à¤®à¤§à¥à¤¯à¥‡ à¤†à¤¹à¥‡",
    notInContacts: "à¤†à¤ªà¤²à¥à¤¯à¤¾ à¤¸à¤‚à¤ªà¤°à¥à¤•à¤¾à¤‚à¤®à¤§à¥à¤¯à¥‡ à¤¨à¤¾à¤¹à¥€",
    reportedAsSpam: "{count} à¤µà¥‡à¤³à¤¾ à¤¸à¥à¤ªà¥…à¤® à¤®à¥à¤¹à¤£à¥‚à¤¨ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¥‡à¤²à¥‡",
    recentlyActivated: "à¤¹à¤¾à¤² à¤¹à¥€ à¤¸à¤•à¥à¤°à¤¿à¤¯ à¤•à¥‡à¤²à¥‡à¤²à¤¾ à¤¨à¤‚à¤¬à¤°",
    
    // Content Analysis
    contentAnalysis: "à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    suspiciousLink: "à¤¸à¤‚à¤¶à¤¯à¤¾à¤¸à¥à¤ªà¤¦ à¤²à¤¿à¤‚à¤•",
    highUrgency: "à¤‰à¤šà¥à¤š à¤¤à¤¾à¤¤à¤•à¤¾à¤³ à¤­à¤¾à¤·à¤¾ à¤¸à¤¾à¤ªà¤¡à¤²à¥€",
    grammarScore: "à¤µà¥à¤¯à¤¾à¤•à¤°à¤£ à¤¸à¥à¤•à¥‹à¤°",
    suspiciousKeywords: "à¤¸à¤‚à¤¶à¤¯à¤¾à¤¸à¥à¤ªà¤¦ à¤•à¥€à¤µà¤°à¥à¤¡",

    // Navigation
    home: "à¤˜à¤°",
    about: "à¤¬à¤¦à¥à¤¦à¤²",
    help: "à¤®à¤¦à¤¤",
    tryDemo: "à¤¡à¥‡à¤®à¥‹ à¤µà¤¾à¤ªà¤°à¤¾",
    analyze: "à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    history: "à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸",
    settings: "à¤¸à¥‡à¤Ÿà¤¿à¤‚à¤—à¥à¤œ",
    login: "à¤²à¥‰à¤—à¤¿à¤¨",
    signUp: "à¤¸à¤¾à¤‡à¤¨ à¤…à¤ª à¤•à¤°à¤¾",
    logout: "à¤²à¥‰à¤— à¤†à¤‰à¤Ÿ à¤•à¤°à¤¾",

    // Hero Section
    heroStat: "â‚¹1,200 à¤•à¥‹à¤Ÿà¥€",
    heroStatDesc: "à¤—à¥‡à¤²à¥à¤¯à¤¾ à¤µà¤°à¥à¤·à¥€ à¤­à¤¾à¤°à¤¤à¤¾à¤¤ SMS à¤˜à¥‹à¤Ÿà¤¾à¤³à¥à¤¯à¤¾à¤‚à¤®à¤§à¥‚à¤¨ à¤¹à¤°à¤µà¤²à¥‡",
    heroTitle: "à¤¬à¥‹à¤—à¤¸ à¤¥à¤¾à¤‚à¤¬à¤µà¤¾.",
    heroTitleGradient: "à¤†à¤ªà¤²à¥‡ à¤ªà¥ˆà¤¸à¥‡ à¤¸à¤‚à¤°à¤•à¥à¤·à¤¿à¤¤ à¤•à¤°à¤¾.",
    heroDescription: "à¤•à¥‹à¤£à¤¤à¤¾à¤¹à¥€ à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¤°à¤¾. à¤†à¤®à¤šà¤¾ AI 3 à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤¤ à¤¤à¤ªà¤¾à¤¸à¤¤ à¤•à¤°à¤¤à¥‹. à¤®à¤°à¤¾à¤ à¥€, à¤¹à¤¿à¤‚à¤¦à¥€ à¤•à¤¿à¤‚à¤µà¤¾ à¤¤à¥‡à¤²à¥à¤—à¥‚ à¤®à¤§à¥à¤¯à¥‡ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤‰à¤¤à¥à¤¤à¤°à¥‡ à¤®à¤¿à¤³à¤µà¤¾. à¤ªà¥‚à¤°à¥à¤£à¤ªà¤£à¥‡ à¤µà¤¿à¤¨à¤¾à¤®à¥‚à¤²à¥à¤¯.",
    analyzeButton: "à¤†à¤¤à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤¾",
    tryFreeButton: "à¤µà¤¿à¤¨à¤¾à¤®à¥‚à¤²à¥à¤¯ à¤µà¤¾à¤ªà¤°à¤¾ (3 à¤¸à¤‚à¤¦à¥‡à¤¶)",

    // Features Section
    whySentinelAI: "SentinelAI à¤•à¤¾?",
    featureSpeed: "3-à¤¸à¥‡à¤•à¤‚à¤¦ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£",
    featureSpeedDesc: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥‡à¤¸à¥à¤Ÿ à¤•à¤°à¤¾, à¤¤à¤¾à¤¤à¥à¤•à¤¾à¤³ à¤‰à¤¤à¥à¤¤à¤° à¤®à¤¿à¤³à¤µà¤¾. à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤¨à¤¾à¤¹à¥€, à¤¤à¥à¤°à¤¾à¤¸ à¤¨à¤¾à¤¹à¥€.",
    featureLanguage: "à¤†à¤ªà¤²à¥€ à¤­à¤¾à¤·à¤¾ à¤¬à¥‹à¤²à¤¤à¥‡",
    featureLanguageDesc: "à¤®à¤°à¤¾à¤ à¥€à¤¤, à¤¹à¤¿à¤‚à¤¦à¥€à¤¤ à¤•à¤¿à¤‚à¤µà¤¾ à¤¤à¥‡à¤²à¥à¤—à¥‚à¤¤ à¤ªà¥‚à¤°à¥à¤£ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£. à¤¸à¤¾à¤§à¥€ à¤¶à¤¬à¥à¤¦à¥‡, à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤¸à¥à¤ªà¤·à¥à¤Ÿà¥€à¤•à¤°à¤£à¥‡.",
    featureRural: "à¤—à¥à¤°à¤¾à¤®à¥€à¤£ à¤­à¤¾à¤°à¤¤à¤¾à¤¸à¤¾à¤ à¥€ à¤¬à¤¨à¤µà¤²à¥‡à¤²à¥‡",
    featureRuralDesc: "à¤¸à¤°à¥à¤µà¤¾à¤‚à¤šà¥à¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤¡à¤¿à¦œà¤¾à¤‡à¤¨ à¤•à¥‡à¤²à¥‡à¤²à¥‡. à¤¤à¤¾à¤‚à¤¤à¥à¤°à¤¿à¤• à¤œà¥à¤žà¤¾à¤¨ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¨à¤¾à¤¹à¥€. à¤¸à¤°à¥à¤µà¤¦à¤¾ à¤µà¤¿à¤¨à¤¾à¤®à¥‚à¤²à¥à¤¯.",
    featureSecurity: "à¤–à¤¾à¤œà¤—à¥€ à¤†à¤£à¤¿ à¤¸à¤‚à¤°à¤•à¥à¤·à¤¿à¤¤",
    featureSecurityDesc: "à¤†à¤ªà¤²à¥‡ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤–à¤¾à¤œà¤—à¥€ à¤°à¤¾à¤¹à¤¤à¤¾à¤¤. à¤†à¤®à¥à¤¹à¥€ 30 à¤¦à¤¿à¤µà¤¸à¤¾à¤‚à¤¨à¤‚à¤¤à¤° à¤¤à¥à¤¯à¤¾à¤‚à¤¨à¤¾ à¤¹à¤Ÿà¤µà¤¤à¥‹. à¤²à¤—à¤µà¤£à¥€ à¤¨à¤¾à¤¹à¥€, à¤µà¤¿à¤œà¥à¤žà¤¾à¤ªà¤¨ à¤¨à¤¾à¤¹à¥€.",

    // Statistics Section
    stats1Title: "SMS à¤˜à¥‹à¤Ÿà¤¾à¤³à¥‡ à¤¶à¥‹à¤§à¤²à¥‡ à¤—à¥‡à¤²à¥‡",
    stats2Title: "à¤µà¤¾à¤ªà¤°à¤•à¤°à¥à¤¤à¥‡ à¤¸à¤‚à¤°à¤•à¥à¤·à¤¿à¤¤",
    stats3Title: "à¤–à¥‹à¤Ÿà¥€ à¤¸à¤•à¤¾à¤°à¤¾à¤¤à¥à¤®à¤•à¤¤à¤¾",

    // CTA Section
    readyToProtect: "à¤†à¤ªà¤²à¥€ à¤¸à¤‚à¤°à¤•à¥à¤·à¤¾ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸ à¤¤à¤¯à¤¾à¤°?",
    startAnalyzing: "à¤†à¤¤à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤•à¤°à¤£à¥à¤¯à¤¾à¤¸ à¤¸à¥à¤°à¥à¤µà¤¾à¤¤ à¤•à¤°à¤¾",
    noCardRequired: "à¤•à¥à¤°à¥‡à¤¡à¤¿à¤Ÿ à¤•à¤¾à¤°à¥à¤¡ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¨à¤¾à¤¹à¥€",

    // Footer
    company: "à¤•à¤‚à¤ªà¤¨à¥€",
    privacy: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾",
    terms: "à¤…à¤Ÿà¥€",
    contact: "à¤¸à¤‚à¤ªà¤°à¥à¤•",
    followUs: "à¤†à¤®à¥à¤¹à¤¾à¤²à¤¾ à¤«à¥‰à¤²à¥‹ à¤•à¤°à¤¾",

    // Auth
    email: "à¤ˆà¤®à¥‡à¤²",
    password: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
    forgotPassword: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤µà¤¿à¤¸à¤°à¤²à¤¾à¤¤?",
    dontHaveAccount: "à¤–à¤¾à¤¤à¥‡ à¤¨à¤¾à¤¹à¥€?",
    alreadyHaveAccount: "à¤†à¤§à¥€à¤š à¤–à¤¾à¤¤à¥‡ à¤†à¤¹à¥‡?",

    // Analysis Page
    enterMessage: "à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤ªà¥à¤°à¤µà¤¿à¤·à¥à¤Ÿ à¤•à¤°à¤¾",
    selectLanguage: "à¤­à¤¾à¤·à¤¾ à¤¨à¤¿à¤µà¤¡à¤¾",
    upload: "à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¤¾",
    cancel: "à¤°à¤¦à¥à¤¦ à¤•à¤°à¤¾",
    save: "à¤œà¤¤à¤¨ à¤•à¤°à¤¾",
    share: "à¤¶à¥‡à¤…à¤° à¤•à¤°à¤¾",
  },
  urdu: {
    // Risk Score Section
    riskLevel: "Ø®Ø·Ø±Û’ Ú©ÛŒ Ø³Ø·Ø­",
    high: "Ø²ÛŒØ§Ø¯Û",
    medium: "Ø¯Ø±Ù…ÛŒØ§Ù†ÛŒ",
    low: "Ú©Ù…",
    confidence: "Ø§Ø¹ØªÙ…Ø§Ø¯",
    
    // Verdict Section
    verdict: "ÙÛŒØµÙ„Û",
    recommendedAction: "Ø¢Ù¾ Ú©Ùˆ Ú©ÛŒØ§ Ú©Ø±Ù†Ø§ Ú†Ø§ÛÛŒÛ’",
    verdictHigh: "ÛŒÛ Ù¾ÛŒØºØ§Ù… Ø§ÛŒÚ© Ø§Ø³Ù…Ø´Ù†Ú¯ Ú©ÛŒ Ú©ÙˆØ´Ø´ ÛÙˆ Ø³Ú©ØªØ§ ÛÛ’",
    verdictMedium: "Ø§Ø³ Ù¾ÛŒØºØ§Ù… Ù…ÛŒÚº Ú©Ú†Ú¾ Ù…Ø´Ú©ÙˆÚ© Ø®ØµÙˆØµÛŒØ§Øª ÛÛŒÚº",
    verdictLow: "ÛŒÛ Ù¾ÛŒØºØ§Ù… Ø¬Ø§Ø¦Ø² Ù„Ú¯ØªØ§ ÛÛ’",
    actionHigh: "Ù„Ù†Ú©Ø³ Ù¾Ø± Ú©Ù„Ú© Ù†Û Ú©Ø±ÛŒÚº ÛŒØ§ Ø°Ø§ØªÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø´ÛŒØ¦Ø± Ù†Û Ú©Ø±ÛŒÚº",
    actionMedium: "Ø¬ÙˆØ§Ø¨ Ø¯ÛŒÙ†Û’ Ø³Û’ Ù¾ÛÙ„Û’ Ø³Ø±Ú©Ø§Ø±ÛŒ Ú†ÛŒÙ†Ù„Ø² Ú©Û’ Ø°Ø±ÛŒØ¹Û’ Ø¨Ú¾ÛŒØ¬Ù†Û’ ÙˆØ§Ù„Û’ Ú©ÛŒ ØªØµØ¯ÛŒÙ‚ Ú©Ø±ÛŒÚº",
    actionLow: "Ø¢Ú¯Û’ Ø¨Ú‘Ú¾Ù†Ø§ Ù…Ø­ÙÙˆØ¸ ÛÛ’ØŒ Ù„ÛŒÚ©Ù† ÛÙ…ÛŒØ´Û Ø³ØªÚ©Ø´ Ø±ÛÛŒÚº",
    
    // Threat Section (risk-conditional titles)
    whyDangerous: "ÛŒÛ Ø®Ø·Ø±Ù†Ø§Ú© Ú©ÛŒÙˆÚº ÛÛ’ØŸ",
    proceedWithCaution: "Ø§Ø­ØªÛŒØ§Ø· Ø³Û’ Ø¢Ú¯Û’ Ø¨Ú‘Ú¾ÛŒÚº",
    thingsToNote: "Ù†ÙˆÙ¹ Ú©Ø±Ù†Û’ Ú©ÛŒ Ø¨Ø§ØªÛŒÚº",
    threatIndicators: "Ø®Ø·Ø±Û’ Ú©Û’ Ø§Ø´Ø§Ø±Û’ Ù…Ù„Û’",
    suspiciousLinkDetected: "Ù…Ø´Ú©ÙˆÚ© Ù„Ù†Ú© Ù…Ù„Ø§",
    suspiciousLinkDesc: "Ù¾ÛŒØºØ§Ù… Ù…ÛŒÚº Ø§ÛŒÚ© Ù…Ø®ØªØµØ± ÛŒØ§ Ù…Ø´Ú©ÙˆÚ© URL ÛÛ’",
    urgencyTactics: "ÙÙˆØ±ÛŒ Ø­Ú©Ù…Øª Ø¹Ù…Ù„ÛŒ Ù…Ù„ÛŒ",
    urgencyTacticsDesc: "Ù¾ÛŒØºØ§Ù… Ù…ØµÙ†ÙˆØ¹ÛŒ ÙˆÙ‚Øª Ú©Ø§ Ø¯Ø¨Ø§Ø¤ Ù¾ÛŒØ¯Ø§ Ú©Ø±ØªØ§ ÛÛ’",
    infoRequest: "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ú©ÛŒ Ø¯Ø±Ø®ÙˆØ§Ø³Øª (Ø®Ø·Ø±Û’ Ú©Ø§ Ù†Ø´Ø§Ù†)",
    infoRequestDesc: "OTP/PIN Ø¬ÛŒØ³ÛŒ Ø­Ø³Ø§Ø³ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù…Ø§Ù†Ú¯ØªØ§ ÛÛ’",
    unknownSender: "Ù†Ø§Ù…Ø¹Ù„ÙˆÙ… Ø¨Ú¾ÛŒØ¬Ù†Û’ ÙˆØ§Ù„Ø§",
    unknownSenderDesc: "Ù†Ù…Ø¨Ø± Ø¢Ù¾ Ú©Û’ Ø±Ø§Ø¨Ø·ÙˆÚº Ù…ÛŒÚº Ù†ÛÛŒÚº ÛÛ’",
    
    // Recommendations
    whatToDo: "Ø¢Ù¾ Ú©Ùˆ Ú©ÛŒØ§ Ú©Ø±Ù†Ø§ Ú†Ø§ÛÛŒÛ’ØŸ",
    immediateActions: "ÙÙˆØ±ÛŒ Ø§Ù‚Ø¯Ø§Ù…",
    doNot: "ÛŒÛ Ù†Û Ú©Ø±ÛŒÚº",
    ifAlreadyClicked: "Ø§Ú¯Ø± Ø¢Ù¾ Ù¾ÛÙ„Û’ ÛÛŒ Ú©Ù„Ú© Ú©Ø± Ú†Ú©Û’ ÛÛŒÚº ÛŒØ§ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø´ÛŒØ¦Ø± Ú©Ø± Ú†Ú©Û’ ÛÛŒÚº",
    
    deleteMessage: "Ø§Ø³ Ù¾ÛŒØºØ§Ù… Ú©Ùˆ Ø§Ø¨Ú¾ÛŒ Ø­Ø°Ù Ú©Ø±ÛŒÚº",
    blockNumber: "Ø§Ø³ ÙÙˆÙ† Ù†Ù…Ø¨Ø± Ú©Ùˆ Ø¨Ù„Ø§Ú© Ú©Ø±ÛŒÚº",
    tellFriends: "3 Ø¯ÙˆØ³ØªÙˆÚº Ú©Ùˆ Ø§Ø³ ÙØ±Ø§Úˆ Ú©Û’ Ø¨Ø§Ø±Û’ Ù…ÛŒÚº Ø¨ØªØ§Ø¦ÛŒÚº",
    callBank: "Ø¶Ø±ÙˆØ±Øª ÛÙˆ ØªÙˆ Ø§Ù¾Ù†Û’ Ø¨ÛŒÙ†Ú© Ú©Ùˆ Ú©Ø§Ù„ Ú©Ø±ÛŒÚº",
    bankHelpline: "Ø¨ÛŒÙ†Ú© ÙØ±Ø§Úˆ ÛÛŒÙ„ Ù¾ Ù„Ø§Ø¦Ù†: 1800-XXX-XXXX",
    
    dontClickLinks: "Ù¾ÛŒØºØ§Ù… Ù…ÛŒÚº Ú©Ø³ÛŒ Ø¨Ú¾ÛŒ Ù„Ù†Ú© Ù¾Ø± Ú©Ù„Ú© Ù†Û Ú©Ø±ÛŒÚº",
    dontShareOTP: "OTP ÛŒØ§ Ù¾Ø§Ø³ ÙˆØ±Úˆ Ú©Ø³ÛŒ Ø³Û’ Ø´ÛŒØ¦Ø± Ù†Û Ú©Ø±ÛŒÚº",
    dontCallBack: "Ù†Ù…Ø¨Ø± Ù¾Ø± ÙˆØ§Ù¾Ø³ Ú©Ø§Ù„ Ù†Û Ú©Ø±ÛŒÚº",
    dontSendMoney: "Ù¾ÛŒØ³Û’ Ù†Û Ø¨Ú¾ÛŒØ¬ÛŒÚº",
    
    callBankImmediately: "Ø§Ù¾Ù†Û’ Ø¨ÛŒÙ†Ú© Ú©Ùˆ ÙÙˆØ±ÛŒ Ø·ÙˆØ± Ù¾Ø± Ú©Ø§Ù„ Ú©Ø±ÛŒÚº: 1800-XXX-XXXX",
    reportCyberCrime: "Ø³Ø§Ø¦Ø¨Ø± Ú©Ø±Ø§Ø¦Ù… Ú©Ùˆ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÛŒÚº: 1930",
    blockCard: "Ø¨ÛŒÙ†Ú© Ø§ÛŒÙ¾ Ú©Û’ Ø°Ø±ÛŒØ¹Û’ Ø§Ù¾Ù†Ø§ Ú©Ø§Ø±Úˆ Ø¨Ù„Ø§Ú© Ú©Ø±ÛŒÚº",
    changePasswords: "Ø§Ø¨ ØªÙ…Ø§Ù… Ù¾Ø§Ø³ ÙˆØ±Úˆ Ø¨Ø¯Ù„ÛŒÚº",
    
    // Save & Share
    saveAnalysis: "Ø§Ø³ ØªØ¬Ø²ÛŒÛ Ú©Ùˆ Ù…Ø­ÙÙˆØ¸ Ú©Ø±ÛŒÚº",
    keepEvidence: "Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±Ù†Û’ ÛŒØ§ Ø¯ÙˆØ³Ø±ÙˆÚº Ú©Ùˆ Ø®Ø·Ø±Û’ Ø³Û’ Ø¢Ú¯Ø§Û Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ Ø´ÛØ§Ø¯Øª Ø±Ú©Ú¾ÛŒÚº",
    downloadPDF: "PDF ÚˆØ§Ø¤Ù† Ù„ÙˆÚˆ Ú©Ø±ÛŒÚº",
    shareAnalysis: "Ø§Ø³ ØªØ¬Ø²ÛŒÛ Ú©Ùˆ Ø´ÛŒØ¦Ø± Ú©Ø±ÛŒÚº",
    copyLink: "Ù„Ù†Ú© Ú©Ø§Ù¾ÛŒ Ú©Ø±ÛŒÚº",
    
    // Share Modal
    shareFormat: "Ø´ÛŒØ¦Ø± Ú©Ø±Ù†Û’ Ú©Ø§ ÙØ§Ø±Ù…ÛŒÙ¹",
    fullReport: "Ù…Ú©Ù…Ù„ Ø±Ù¾ÙˆØ±Ù¹ - ØªÙØµÛŒÙ„ÛŒ ØªØ¬Ø²ÛŒÛ",
    quickWarning: "ÙÙˆØ±ÛŒ Ø§Ù†ØªØ¨Ø§Û - Ø§ÛÙ… Ù†Ú©Ø§Øª Ú©Û’ Ø³Ø§ØªÚ¾ Ø®Ù„Ø§ØµÛ",
    anonymous: "Ú¯Ù…Ù†Ø§Ù… - Ú©ÙˆØ¦ÛŒ Ø°Ø§ØªÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù†ÛÛŒÚº",
    shareVia: "Ø§Ø³ Ú©Û’ Ø°Ø±ÛŒØ¹Û’ Ø´ÛŒØ¦Ø± Ú©Ø±ÛŒÚº",
    preview: "Ù†Ù…Ø§Ø¦Ø´",
    privacyNotice: "Ø¢Ù¾ Ú©ÛŒ Ø°Ø§ØªÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø´ÛŒØ¦Ø± Ù†ÛÛŒÚº Ú©ÛŒ Ø¬Ø§Ø¦Û’ Ú¯ÛŒ",
    linkCopied: "Ù„Ù†Ú© Ú©Ø§Ù¾ÛŒ ÛÙˆ Ú¯ÛŒØ§! 7 Ø¯Ù† Ú©Û’ Ù„ÛŒÛ’ Ø¯Ø±Ø³Øª",
    generateLink: "Ø´ÛŒØ¦Ø± Ù„Ù†Ú© Ø¨Ù†Ø§Ø¦ÛŒÚº",
    
    // Chatbot
    askAnything: "Ù…Ø¬Ú¾ Ø³Û’ Ú©Ú†Ú¾ Ø¨Ú¾ÛŒ Ù¾ÙˆÚ†Ú¾ÛŒÚº",
    typeQuestion: "Ø§Ù¾Ù†Ø§ Ø³ÙˆØ§Ù„ Ù¹Ø§Ø¦Ù¾ Ú©Ø±ÛŒÚº...",
    
    // Quick Questions
    whyRisky: "ÛŒÛ Ø®Ø·Ø±Ù†Ø§Ú© Ú©ÛŒÙˆÚº Ø³Ù…Ø¬Ú¾Ø§ Ø¬Ø§ØªØ§ ÛÛ’ØŸ",
    whatIfClicked: "Ø§Ú¯Ø± Ù…ÛŒÚº Ù¾ÛÙ„Û’ Ø³Û’ Ù„Ù†Ú© Ù¾Ø± Ú©Ù„Ú© Ú©Ø± Ú†Ú©Ø§ ÛÙˆÚºØŸ",
    howToReport: "Ù…ÛŒÚº Ø§Ø³Û’ Ù¾ÙˆÙ„ÛŒØ³ Ú©Ùˆ Ú©ÛŒØ³Û’ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÙˆÚºØŸ",
    whatIfSharedOTP: "Ø§Ú¯Ø± Ù…ÛŒÚº Ù†Û’ Ø§Ù¾Ù†Ø§ OTP Ø´ÛŒØ¦Ø± Ú©Ø± Ø¯ÛŒØ§ØŸ",
    
    // Sender Analysis
    senderAnalysis: "Ø¨Ú¾ÛŒØ¬Ù†Û’ ÙˆØ§Ù„Û’ Ú©Ø§ ØªØ¬Ø²ÛŒÛ",
    phoneNumber: "ÙÙˆÙ† Ù†Ù…Ø¨Ø±",
    inContacts: "Ø¢Ù¾ Ú©Û’ Ø±Ø§Ø¨Ø·ÙˆÚº Ù…ÛŒÚº ÛÛ’",
    notInContacts: "Ø¢Ù¾ Ú©Û’ Ø±Ø§Ø¨Ø·ÙˆÚº Ù…ÛŒÚº Ù†ÛÛŒÚº ÛÛ’",
    reportedAsSpam: "{count} Ø¨Ø§Ø± Ø§Ø³Ù¾ÛŒÙ… Ú©Û’ Ø·ÙˆØ± Ù¾Ø± Ø±Ù¾ÙˆØ±Ù¹ Ú©ÛŒØ§ Ú¯ÛŒØ§",
    recentlyActivated: "Ø§Ø¨Ú¾ÛŒ Ø³Û’ Ù…ØªØ­Ø±Ú© Ú©ÛŒØ§ Ú¯ÛŒØ§ Ù†Ù…Ø¨Ø±",
    
    // Content Analysis
    contentAnalysis: "Ù…ÙˆØ§Ø¯ Ú©Ø§ ØªØ¬Ø²ÛŒÛ",
    suspiciousLink: "Ù…Ø´Ú©ÙˆÚ© Ù„Ù†Ú©",
    highUrgency: "Ø²ÛŒØ§Ø¯Û ÙÙˆØ±ÛŒ Ø²Ø¨Ø§Ù† Ù…Ø­Ø³ÙˆØ³ Ú©ÛŒ Ú¯Ø¦ÛŒ",
    grammarScore: "Ú¯Ø±Ø§Ù…Ø± Ø§Ø³Ú©ÙˆØ±",
    suspiciousKeywords: "Ù…Ø´Ú©ÙˆÚ© Ø§Ù„ÙØ§Ø¸",

    // Navigation
    home: "Ú¯Ú¾Ø±",
    about: "Ø¨Ø§Ø±Û’ Ù…ÛŒÚº",
    help: "Ù…Ø¯Ø¯",
    tryDemo: "ÚˆÛŒÙ…Ùˆ Ø¢Ø²Ù…Ø§Ø¦ÛŒÚº",
    analyze: "ØªØ¬Ø²ÛŒÛ",
    history: "ØªØ§Ø±ÛŒØ®",
    settings: "Ø³ÛŒÙ¹Ù†Ú¯Ø²",
    login: "Ù„Ø§Ú¯ Ø§Ù†",
    signUp: "Ø³Ø§Ø¦Ù† Ø§Ù¾",
    logout: "Ù„Ø§Ú¯ Ø¢Ø¤Ù¹",

    // Hero Section
    heroStat: "â‚¹1,200 Ú©Ø±ÙˆÚ‘",
    heroStatDesc: "Ú¯Ø²Ø´ØªÛ Ø³Ø§Ù„ Ø¨Ú¾Ø§Ø±Øª Ù…ÛŒÚº SMS Ø¬Ø¹Ù„ Ù…ÛŒÚº Ú©Ú¾ÙˆÛŒØ§ ÛÙˆØ§",
    heroTitle: "Ø¯Ú¾ÙˆÚ©Û Ø¯ÛÙ†Ø¯Ú¯ÛŒ Ø¨Ù†Ø¯ Ú©Ø±ÛŒÚº.",
    heroTitleGradient: "Ø§Ù¾Ù†ÛŒ Ø±Ù‚Ù… Ú©ÛŒ Ø­ÙØ§Ø¸Øª Ú©Ø±ÛŒÚº.",
    heroDescription: "Ú©ÙˆØ¦ÛŒ Ø¨Ú¾ÛŒ Ù…Ø´Ú©ÙˆÚ© Ù¾ÛŒØºØ§Ù… Ù¾ÛŒØ³Ù¹ Ú©Ø±ÛŒÚºÛ” ÛÙ…Ø§Ø±Ø§ AI 3 Ø³ÛŒÚ©Ù†Úˆ Ù…ÛŒÚº Ø¬Ø§Ù†Ú† Ú©Ø±ØªØ§ ÛÛ’Û” Ø§Ø±Ø¯ÙˆØŒ ÛÙ†Ø¯ÛŒ ÛŒØ§ ØªÛŒÙ„Ú¯Ùˆ Ù…ÛŒÚº ÙˆØ§Ø¶Ø­ Ø¬ÙˆØ§Ø¨Ø§Øª Ø­Ø§ØµÙ„ Ú©Ø±ÛŒÚºÛ” Ø¨Ø§Ù„Ú©Ù„ Ù…ÙØªÛ”",
    analyzeButton: "Ø§Ø¨Ú¾ÛŒ ØªØ¬Ø²ÛŒÛ Ú©Ø±ÛŒÚº",
    tryFreeButton: "Ù…ÙØª Ø¢Ø²Ù…Ø§Ø¦ÛŒÚº (3 Ù¾ÛŒØºØ§Ù…)",

    // Features Section
    whySentinelAI: "SentinelAI Ú©ÛŒØ§ ÛÛ’ØŸ",
    featureSpeed: "3-Ø³ÛŒÚ©Ù†Úˆ ØªØ¬Ø²ÛŒÛ",
    featureSpeedDesc: "Ù¾ÛŒØºØ§Ù… Ù¾ÛŒØ³Ù¹ Ú©Ø±ÛŒÚºØŒ ÙÙˆØ±ÛŒ Ø¬ÙˆØ§Ø¨ Ù¾Ø§Ø¦ÛŒÚºÛ” Ú©ÙˆØ¦ÛŒ Ø§Ù†ØªØ¸Ø§Ø± Ù†ÛÛŒÚºØŒ Ú©ÙˆØ¦ÛŒ ØªÚ©Ù„ÛŒÙ Ù†ÛÛŒÚºÛ”",
    featureLanguage: "Ø¢Ù¾ Ú©ÛŒ Ø²Ø¨Ø§Ù† Ø¨ÙˆÙ„ØªØ§ ÛÛ’",
    featureLanguageDesc: "Ø§Ø±Ø¯ÙˆØŒ ÛÙ†Ø¯ÛŒØŒ ØªÛŒÙ„Ú¯ÙˆØŒ Ø§Ø±Ø¯Ùˆ Ø§ÙˆØ± ØªÙ…Ù„ Ù…ÛŒÚº Ù…Ú©Ù…Ù„ ØªØ¬Ø²ÛŒÛÛ” Ø³Ø§Ø¯Û Ø§Ù„ÙØ§Ø¸ØŒ ÙˆØ§Ø¶Ø­ ÙˆØ¶Ø§Ø­ØªÛ”",
    featureRural: "Ø¯ÛŒÛÛŒ Ø¨Ú¾Ø§Ø±Øª Ú©Û’ Ù„ÛŒÛ’ ØªÛŒØ§Ø±",
    featureRuralDesc: "Ø³Ø¨ Ú©Û’ Ù„ÛŒÛ’ ÚˆÛŒØ²Ø§Ø¦Ù† Ú©ÛŒØ§ Ú¯ÛŒØ§Û” ØªÚ©Ù†ÛŒÚ©ÛŒ Ø¹Ù„Ù… Ú©ÛŒ Ø¶Ø±ÙˆØ±Øª Ù†ÛÛŒÚºÛ” ÛÙ…ÛŒØ´Û Ù…ÙØªÛ”",
    featureSecurity: "Ù†Ø¬ÛŒ Ø§ÙˆØ± Ù…Ø­ÙÙˆØ¸",
    featureSecurityDesc: "Ø¢Ù¾ Ú©Û’ Ù¾ÛŒØºØ§Ù… Ù†Ø¬ÛŒ Ø±ÛØªÛ’ ÛÛŒÚºÛ” ÛÙ… Ø§Ù†ÛÛŒÚº 30 Ø¯Ù† Ø¨Ø¹Ø¯ ÛÙ¹Ø§ØªÛ’ ÛÛŒÚºÛ” Ú©ÙˆØ¦ÛŒ Ù¹Ø±ÛŒÚ©Ù†Ú¯ Ù†ÛÛŒÚºØŒ Ú©ÙˆØ¦ÛŒ Ø§Ø´ØªÛØ§Ø± Ù†ÛÛŒÚºÛ”",

    // Trust Section (badges)
    trustFreeTitle: "100% ÛÙ…ÛŒØ´Û Ù…ÙØª",
    trustFreeDesc: "Ú©Ø±ÛŒÚˆÙ¹ Ú©Ø§Ø±Úˆ Ú©ÛŒ Ø¶Ø±ÙˆØ±Øª Ù†ÛÛŒÚºÛ” Ú©Ø¨Ú¾ÛŒÛ”",
    trustLangsTitle: "5 Ø²Ø¨Ø§Ù†ÙˆÚº",
    trustLangsDesc: "Ø§Ø±Ø¯ÙˆØŒ ÛÙ†Ø¯ÛŒØŒ ØªÛŒÙ„Ú¯ÙˆØŒ Ø§Ø±Ø¯ÙˆØŒ Ø§ÙˆØ± ØªÙ…Ù„ Ø³Ù¾ÙˆØ±Ù¹Úˆ",
    trustIndiaTitle: "Ø¨Ú¾Ø§Ø±Øª Ú©Û’ Ù„ÛŒÛ’ Ø¨Ù†Ø§ÛŒØ§ Ú¯ÛŒØ§",
    trustIndiaDesc: "Ø¨Ú¾Ø§Ø±ØªÛŒ Ø¯Ú¾ÙˆÚ©Û patterns Ú©Û’ Ù„ÛŒÛ’ Ø®Ø§Øµ Ø·ÙˆØ± Ù¾Ø± ØªÛŒØ§Ø±",
    trustSecurityTitle: "Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ Ø³Ø¨ Ø³Û’ Ù¾ÛÙ„Û’",
    trustSecurityDesc: "Ø¢Ù¾ Ú©Ø§ ÚˆÛŒÙ¹Ø§ encrypted ÛÛ’ Ø§ÙˆØ± auto-deleted",

    // Statistics Section
    stats1Title: "SMS Ø¯Ú¾ÙˆÚ©Û Ø´Ù†Ø§Ø®Øª Ø´Ø¯Û",
    stats2Title: "ØµØ§Ø±ÙÛŒÙ† Ù…Ø­ÙÙˆØ¸",
    stats3Title: "ØºÙ„Ø· Ù…Ø«Ø¨Øª",

    // CTA Section
    readyToProtect: "Ø§Ù¾Ù†ÛŒ Ø­ÙØ§Ø¸Øª Ú©Û’ Ù„ÛŒÛ’ ØªÛŒØ§Ø±ØŸ",
    startAnalyzing: "ØªØ¬Ø²ÛŒÛ Ø´Ø±ÙˆØ¹ Ú©Ø±ÛŒÚº",
    noCardRequired: "Ú©Ø±ÛŒÚˆÙ¹ Ú©Ø§Ø±Úˆ Ú©ÛŒ Ø¶Ø±ÙˆØ±Øª Ù†ÛÛŒÚº",

    // Footer
    company: "Ú©Ù…Ù¾Ù†ÛŒ",
    privacy: "Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ",
    terms: "Ø´Ø±Ø§Ø¦Ø·",
    contact: "Ø±Ø§Ø¨Ø·Û",
    followUs: "ÛÙ…ÛŒÚº ÙØ§Ù„Ùˆ Ú©Ø±ÛŒÚº",

    // Auth
    email: "Ø§ÛŒ Ù…ÛŒÙ„",
    password: "Ù¾Ø§Ø³ ÙˆØ±Úˆ",
    forgotPassword: "Ù¾Ø§Ø³ ÙˆØ±Úˆ Ø¨Ú¾ÙˆÙ„ Ú¯Ø¦Û’ØŸ",
    dontHaveAccount: "Ø§Ú©Ø§Ø¤Ù†Ù¹ Ù†ÛÛŒÚº ÛÛ’ØŸ",
    alreadyHaveAccount: "Ù¾ÛÙ„Û’ Ø³Û’ Ø§Ú©Ø§Ø¤Ù†Ù¹ ÛÛ’ØŸ",

    // Analysis Page
    enterMessage: "Ù…Ø´Ú©ÙˆÚ© Ù¾ÛŒØºØ§Ù… Ø¯Ø±Ø¬ Ú©Ø±ÛŒÚº",
    selectLanguage: "Ø²Ø¨Ø§Ù† Ù…Ù†ØªØ®Ø¨ Ú©Ø±ÛŒÚº",
    upload: "Ø§Ù¾ Ù„ÙˆÚˆ Ú©Ø±ÛŒÚº",
    cancel: "Ù…Ù†Ø³ÙˆØ® Ú©Ø±ÛŒÚº",
    save: "Ù…Ø­ÙÙˆØ¸ Ú©Ø±ÛŒÚº",
    share: "Ø´ÛŒØ¦Ø± Ú©Ø±ÛŒÚº",

    // About Page
    whyWeBuiltThis: "ÛÙ… Ù†Û’ ÛŒÛ Ú©ÛŒÙˆÚº Ø¨Ù†Ø§ÛŒØ§",
    aboutIntro: "ÛØ± ÛÙØªÛ’ØŒ Ø§ÙØ±Ø§Ø¯ Ú©ÛŒ Ù„Ø§Ú©Ú¾ÙˆÚº Ø¯ÛŒÛÛŒ Ø¨Ú¾Ø§Ø±ØªÛŒÙˆÚº Ú©Ùˆ Ø§ÛŒØ³Û’ SMS Ù¾ÛŒØºØ§Ù… Ù…ÙˆØµÙˆÙ„ ÛÙˆØªÛ’ ÛÛŒÚº Ø¬Ùˆ Ø§ØµÙ„ ÛÛŒÚº Ù„ÛŒÚ©Ù† Ù†ÛÛŒÚº ÛÛŒÚºÛ”",
    aboutProblem: "Ø§ÛŒÚ© Ù¾ÛŒØºØ§Ù… Ú©ÛØªØ§ ÛÛ’ Ú©Û Ø§Ù† Ú©Ø§ Ø¢Ø¯Ú¾Ø§Ø± Ø®ØªÙ… ÛÙˆ Ø±ÛØ§ ÛÛ’Û” Ø§ÛŒÚ© Ø¬Ø¹Ù„ÛŒ Ø¨ÛŒÙ†Ú© Ø§Ù„Ø±Ù¹ Ú©ÛØªØ§ ÛÛ’ Ú©Û Ø§Ù† Ú©Ø§ Ø§Ú©Ø§Ø¤Ù†Ù¹ Ø¨Ù†Ø¯ ÛÙˆ Ø¬Ø§Ø¦Û’ Ú¯Ø§Û” Ø§ÛŒÚ© Ù„Ø§Ù¹Ø±ÛŒ Ø¬Ø³ Ù…ÛŒÚº ÙˆÛ Ú©Ø¨Ú¾ÛŒ Ø¯Ø§Ø®Ù„ Ù†ÛÛŒÚº ÛÙˆÛ’Û” Ø§ÛŒÚ© Ø­Ú©ÙˆÙ…ØªÛŒ Ø§Ø³Ú©ÛŒÙ… Ø¬Ùˆ Ù…ÙˆØ¬ÙˆØ¯ Ù†ÛÛŒÚº ÛÛ’Û”",
    aboutProblem2: "ÛŒÛ Ù¾ÛŒØºØ§Ù… Ø³ÙÛŒØ¯ ÚˆØ± Ù¾ÛŒØ¯Ø§ Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ ÚˆÛŒØ²Ø§Ø¦Ù† Ú©ÛŒÛ’ Ú¯Ø¦Û’ ÛÛŒÚºÛ” ÙˆÛ Ø³Ø±Ú©Ø§Ø±ÛŒ Ø¢ÙˆØ§Ø² Ú©ÛŒ Ø²Ø¨Ø§Ù† Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ú©Ø±ØªÛ’ ÛÛŒÚºÛ” ÙˆÛ Ù†ØªØ§Ø¦Ø¬ Ú©ÛŒ Ø¯Ú¾Ù…Ú©ÛŒ Ø¯ÛŒØªÛ’ ÛÛŒÚºÛ” ÙˆÛ ÙÙˆØ±ÛŒ Ú©Ø§Ø±Ø±ÙˆØ§Ø¦ÛŒ Ú©Ø§ Ù…Ø·Ø§Ù„Ø¨Û Ú©Ø±ØªÛ’ ÛÛŒÚºÛ”",
    aboutProblem3: "Ø§ÙˆØ± ÙˆÛ Ú©Ø§Ù… Ú©Ø±ØªÛ’ ÛÛŒÚºÛ”",
    aboutStats: "2023 Ù…ÛŒÚº Ø§Ú©ÛŒÙ„Û’ØŒ Ø¨Ú¾Ø§Ø±ØªÛŒÙˆÚº Ù†Û’ SMS Ø¯Ú¾ÙˆÚ©Û’ Ø³Û’ 1ØŒ200 Ú©Ø±ÙˆÚ‘ Ø±ÙˆÙ¾Û’ Ø³Û’ Ø²ÛŒØ§Ø¯Û Ú©Ú¾Ùˆ Ø¯ÛŒÛ’Û”",
    aboutMission: "ÛÙ… Ù†Û’ SentinelAI Ø¨Ù†Ø§ÛŒØ§ Ú©ÛŒÙˆÙ†Ú©Û ÛØ± Ú©ÙˆØ¦ÛŒ Ø­ÙØ§Ø¸Øª Ú©Û’ Ù‚Ø§Ø¨Ù„ ÛÛ’ØŒ Ú†Ø§ÛÛ’ ÙˆÛ Ú©ÛÛŒÚº Ø¨Ú¾ÛŒ Ø±ÛØªÛ’ ÛÙˆÚº ÛŒØ§ Ú©ÙˆÙ† Ø³ÛŒ Ø²Ø¨Ø§Ù† Ø¨ÙˆÙ„ØªÛ’ ÛÙˆÚºÛ”",
    problemIsReal: "Ù…Ø³Ø¦Ù„Û Ø§ØµÙ„ ÛÛ’",
    realityOfFraud: "Ø¨Ú¾Ø§Ø±Øª Ù…ÛŒÚº SMS Ø¯Ú¾ÙˆÚ©Û’ Ú©ÛŒ Ø­Ù‚ÛŒÙ‚Øª",
    lostToFraud: "2023 Ù…ÛŒÚº Ø¨Ú¾Ø§Ø±Øª Ù…ÛŒÚº Ø¯Ú¾ÙˆÚ©Û’ Ø³Û’ Ú©Ú¾ÙˆÛŒØ§ ÛÙˆØ§",
    cyberCrimeReports: "Ø³Ø§Ø¦Ø¨Ø± Ú©Ø±ÛŒÙ… Ø±Ù¾ÙˆØ±Ù¹Ø³",
    victimLiveRural: "Ø´Ú©Ø§Ø± Ø¯ÛŒÛÛŒ Ø¹Ù„Ø§Ù‚ÙˆÚº Ù…ÛŒÚº Ø±ÛØªÛ’ ÛÛŒÚº",
    yearOverYearIncrease: "Ø³Ø§Ù„ Ø¯Ø±Ø³Ø§Ù„ smishing Ù…ÛŒÚº Ø§Ø¶Ø§ÙÛ",
    averageVictimLoss: "Ø§ÙˆØ³Ø· Ø´Ú©Ø§Ø± Ù†Ù‚ØµØ§Ù† (Ø§Ú©Ø«Ø± Ø²Ù†Ø¯Ú¯ÛŒ Ú©ÛŒ Ø¨Ú†Øª)",
    reportedToAuthorities: "ØµØ±Ù 23Ùª Ø¯Ú¾ÙˆÚ©Û’ Ø§Ø®ØªÛŒØ§Ø±Ø§Øª Ú©Ùˆ Ø±Ù¾ÙˆØ±Ù¹ Ú©ÛŒÛ’ Ø¬Ø§ØªÛ’ ÛÛŒÚº",
    cannotIdentifyScams: "78Ùª Ø¯ÛŒÛÛŒ Ø¨Ú¾Ø§Ø±ØªÛŒ Ø¹Ø§Ù… ÙØ±ÛŒØ¨ Ú©Û’ Ù†Ù…ÙˆÙ†Û’ Ø´Ù†Ø§Ø®Øª Ù†ÛÛŒÚº Ú©Ø± Ø³Ú©ØªÛ’",
    dontSeekHelp: "43Ùª Ø´Ú©Ø§Ø± Ø´Ø±Ù… Ø³Û’ Ù…Ø¯Ø¯ Ù†ÛÛŒÚº Ù„ÛŒØªÛ’",
    bankingScramsAccount: "Ø¨ÛŒÙ†Ú©Ù†Ú¯ Ø¯Ú¾ÙˆÚ©Û’ ØªÙ…Ø§Ù… SMS Ø¯Ú¾ÙˆÚ©Û’ Ú©Ø§ 43Ùª ÛÛŒÚº",
    moreAlarmingFacts: "Ù…Ø²ÛŒØ¯ Ù¾Ø±ÛŒØ´Ø§Ù† Ú©Ù† Ø­Ù‚Ø§Ø¦Ù‚",
    whyRuralTargeted: "Ø¯ÛŒÛÛŒ Ø¹Ù„Ø§Ù‚ÙˆÚº Ú©Ùˆ Ú©ÛŒÙˆÚº Ù†Ø´Ø§Ù†Û Ø¨Ù†Ø§ÛŒØ§ Ø¬Ø§ØªØ§ ÛÛ’",
    limitedDigitalLiteracy: "Ù…Ø­Ø¯ÙˆØ¯ ÚˆÛŒØ¬ÛŒÙ¹Ù„ Ø³ÙˆØ§Ø¯ Ø§ÙˆØ± Ø¯Ú¾ÙˆÚ©Û’ Ø³Û’ Ø¢Ú¯Ø§ÛÛŒ",
    languageBarriers: "Ø²Ø¨Ø§Ù† Ú©ÛŒ Ø±Ú©Ø§ÙˆÙ¹ÛŒÚº (ÙØ±ÛŒØ¨ Ú©ÛŒ Ø§Ù†ØªØ¨Ø§ÛØ§Øª ØµØ±Ù Ø§Ù†Ú¯Ø±ÛŒØ²ÛŒ Ù…ÛŒÚº)",
    trustInMessages: "Ø³Ø±Ú©Ø§Ø±ÛŒ Ù†Ø¸Ø± Ø¢Ù†Û’ ÙˆØ§Ù„Û’ Ù¾ÛŒØºØ§Ù…Ø§Øª Ù¾Ø± Ø§Ø¹ØªÙ…Ø§Ø¯",
    lessAccessToEducation: "Ø¯Ú¾ÙˆÚ©Û’ Ú©ÛŒ ØªØ¹Ù„ÛŒÙ… Ú©Û’ ÙˆØ³Ø§Ø¦Ù„ ØªÚ© Ú©Ù… Ø±Ø³Ø§Ø¦ÛŒ",
    delayedReportingAllows: "ØªØ§Ø®ÛŒØ± Ø³Û’ Ø±Ù¾ÙˆØ±Ù¹Ù†Ú¯ ÙØ±ÛŒØ¨ Ú©Ø§Ø±ÙˆÚº Ú©Ùˆ Ø²ÛŒØ§Ø¯Û Ø¯ÛŒØ± ØªÚ© Ú©Ø§Ù… Ú©Ø±Ù†Û’ Ú©ÛŒ Ø§Ø¬Ø§Ø²Øª Ø¯ÛŒØªÛŒ ÛÛ’",
    ourSolution: "ÛÙ…Ø§Ø±Ø§ Ø­Ù„",
    simpleAccessibleProtection: "Ø³Ø¨ Ú©Û’ Ù„ÛŒÛ’ Ø³Ø§Ø¯ÛØŒ Ù…ÙØª Ø§ÙˆØ± Ù‚Ø§Ø¨Ù„ Ø±Ø³Ø§Ø¦ÛŒ Ø­ÙØ§Ø¸Øª",
    threeSecondAnalysis: "3-Ø³ÛŒÚ©Ù†Úˆ ØªØ¬Ø²ÛŒÛ",
    freeAiAnalyzes: "Ù…ÙØª AI Ø¬Ùˆ ÙÙˆØ±ÛŒ Ø·ÙˆØ± Ù¾Ø± Ù¾ÛŒØºØ§Ù…Ø§Øª Ú©Ùˆ ØªØ¬Ø²ÛŒÛ Ú©Ø±ØªØ§ ÛÛ’",
    worksInYourLanguage: "Ø¢Ù¾ Ú©ÛŒ Ø²Ø¨Ø§Ù† Ù…ÛŒÚº Ú©Ø§Ù… Ú©Ø±ØªØ§ ÛÛ’ (Ù…Ø²ÛŒØ¯ Ø¢ Ø±ÛØ§ ÛÛ’)",
    builtForEveryone: "Ø³Ø¨ Ú©Û’ Ù„ÛŒÛ’ Ø¨Ù†Ø§ÛŒØ§ Ú¯ÛŒØ§",
    noTechNeeded: "Ú©ÙˆØ¦ÛŒ ØªÚ©Ù†ÛŒÚ©ÛŒ Ø¹Ù„Ù… Ú©ÛŒ Ø¶Ø±ÙˆØ±Øª Ù†ÛÛŒÚº",
    privacyFirst: "Ù¾ÛÙ„Û’ Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ",
    messagesEncrypted: "30 Ø¯Ù† Ø¨Ø¹Ø¯ Ù¾ÛŒØºØ§Ù…Ø§Øª Ù‚Ø§Ø¨Ù„ ØªØ´ÙÛŒØ± Ø§ÙˆØ± Ø­Ø°Ù",
    indiaSpecific: "Ø¨Ú¾Ø§Ø±Øª Ú©Û’ Ù„ÛŒÛ’ Ù…Ø®ØµÙˆØµ",
    trainedOnIndian: "Ø¨Ú¾Ø§Ø±ØªÛŒ Ø¯Ú¾ÙˆÚ©Û’ Ú©Û’ Ù†Ù…ÙˆÙ†ÙˆÚº Ù¾Ø± ØªØ±Ø¨ÛŒØª ÛŒØ§ÙØªÛ",
    freeForever: "ÛÙ…ÛŒØ´Û Ú©Û’ Ù„ÛŒÛ’ Ù…ÙØª",
    noAdsTracking: "Ú©ÙˆØ¦ÛŒ Ø§Ø´ØªÛØ§Ø± Ù†ÛÛŒÚºØŒ Ú©ÙˆØ¦ÛŒ Ù¹Ø±ÛŒÚ©Ù†Ú¯ Ù†ÛÛŒÚºØŒ Ú©ÙˆØ¦ÛŒ Ù¾ÙˆØ´ÛŒØ¯Û Ø§Ø®Ø±Ø§Ø¬Ø§Øª Ù†ÛÛŒÚº",
    fourSimpleSteps: "Ø®ÙˆØ¯ Ú©Ùˆ Ø¨Ú†Ø§Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ Ú†Ø§Ø± Ø³Ø§Ø¯Û Ø§Ù‚Ø¯Ø§Ù…Ø§Øª",
    copyTheSuspicious: "Ù…Ø´Ú©ÙˆÚ© Ù¾ÛŒØºØ§Ù… Ú©Û’ Ù…ØªÙ† Ú©Ùˆ Ú©Ø§Ù¾ÛŒ Ú©Ø±ÛŒÚº",
    aiAnalysis: "AI ØªØ¬Ø²ÛŒÛ",
    weCheck47: "ÛÙ… 47 Ù…Ø¹Ø±ÙˆÙ Ø¯Ú¾ÙˆÚ©Û’ Ú©Û’ Ù†Ù…ÙˆÙ†Û’ Ú©Ùˆ Ú†ÛŒÚ© Ú©Ø±ØªÛ’ ÛÛŒÚº",
    getVerdict: "ÙÛŒØµÙ„Û Ø­Ø§ØµÙ„ Ú©Ø±ÛŒÚº",
    clearAnswer: "ÙˆØ§Ø¶Ø­ Ø¬ÙˆØ§Ø¨: Ù…Ø­ÙÙˆØ¸ØŒ Ù…Ø´Ú©ÙˆÚ©ØŒ ÛŒØ§ Ø¯Ú¾ÙˆÚ©Û",
    takeAction: "Ú©Ø§Ø±Ø±ÙˆØ§Ø¦ÛŒ Ú©Ø±ÛŒÚº",
    simpleStepsInLanguage: "Ø¢Ù¾ Ú©ÛŒ Ø²Ø¨Ø§Ù† Ù…ÛŒÚº Ø³Ø§Ø¯Û Ø§Ù‚Ø¯Ø§Ù…Ø§Øª",

    // Help Page
    helpCenter: "Ù…Ø¯Ø¯ Ú©Ø§ Ù…Ø±Ú©Ø²",
    findAnswers: "SentinelAI Ú©Û’ Ø¨Ø§Ø±Û’ Ù…ÛŒÚº Ø¹Ø§Ù… Ø³ÙˆØ§Ù„Ø§Øª Ú©Û’ Ø¬ÙˆØ§Ø¨Ø§Øª ØªÙ„Ø§Ø´ Ú©Ø±ÛŒÚº",
    general: "Ø¹Ø§Ù…",
    howDoesWork: "SentinelAI Ú©ÛŒØ³Û’ Ú©Ø§Ù… Ú©Ø±ØªØ§ ÛÛ’ØŸ",
    pasteYourMessage: "Ø§Ù¾Ù†Ø§ Ù¾ÛŒØºØ§Ù… Ù¾ÛŒØ³Ù¹ Ú©Ø±ÛŒÚºØŒ ÛÙ…Ø§Ø±Ø§ AI Ø§Ø³Û’ 3 Ø³ÛŒÚ©Ù†Úˆ Ù…ÛŒÚº ØªØ¬Ø²ÛŒÛ Ú©Ø±ØªØ§ ÛÛ’ØŒ Ø¢Ù¾ Ú©Ùˆ Ø§Ù¾Ù†ÛŒ Ø²Ø¨Ø§Ù† Ù…ÛŒÚº ÙˆØ§Ø¶Ø­ Ø¬ÙˆØ§Ø¨ Ù…Ù„ØªØ§ ÛÛ’Û”",
    isItReallyFree: "Ú©ÛŒØ§ ÛŒÛ ÙˆØ§Ù‚Ø¹ÛŒ Ù…ÙØª ÛÛ’ØŸ",
    yesCompletelyfree: "ÛØ§ÚºÛ” Ø¨Ø§Ù„Ú©Ù„ Ù…ÙØªÛ” Ú©ÙˆØ¦ÛŒ Ú©Ø±ÛŒÚˆÙ¹ Ú©Ø§Ø±ÚˆØŒ Ú©ÙˆØ¦ÛŒ Ù¾ÙˆØ´ÛŒØ¯Û ÙÛŒØ³ Ù†ÛÛŒÚºØŒ ÛÙ…ÛŒØ´ÛÛ” Ú¯Ø±Ø§Ù†Ù¹Ø³ Ø§ÙˆØ± Ø¹Ø·ÛŒØ§Øª Ø³Û’ ÙÙ†Úˆ Ú©ÛŒØ§ Ø¬Ø§ØªØ§ ÛÛ’Û”",
    whichLanguagesSupported: "Ú©ÙˆÙ† Ø³ÛŒ Ø²Ø¨Ø§Ù†ÛŒÚº Ù…Ø¹Ø§ÙˆÙ† ÛÛŒÚºØŸ",
    hindiEnglishTelugu: "Ø§Ø±Ø¯ÙˆØŒ ÛÙ†Ø¯ÛŒØŒ Ø§ÙˆØ± ØªÛŒÙ„Ú¯ÙˆÛ” Ù…Ø²ÛŒØ¯ Ø¨Ú¾Ø§Ø±ØªÛŒ Ø²Ø¨Ø§Ù†ÛŒÚº Ø¬Ù„Ø¯ Ø¢ Ø±ÛÛŒ ÛÛŒÚºÛ”",
    doINeedAccount: "Ú©ÛŒØ§ Ù…Ø¬Ú¾Û’ Ø§ÛŒÚ© Ø§Ú©Ø§Ø¤Ù†Ù¹ Ø¨Ù†Ø§Ù†Ø§ ÛÙˆÚ¯Ø§ØŸ",
    noForTrying: "ÚˆÛŒÙ…Ùˆ Ø¢Ø²Ù…Ø§Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ Ù†ÛÛŒÚºÛ” Ø§Ù¾Ù†ÛŒ ØªØ¬Ø²ÛŒÛ Ú©ÛŒ ØªØ§Ø±ÛŒØ® Ù…Ø­ÙÙˆØ¸ Ú©Ø±Ù†Û’ Ø§ÙˆØ± Ù…Ú©Ù…Ù„ Ø®ØµÙˆØµÛŒØ§Øª ØªÚ© Ø±Ø³Ø§Ø¦ÛŒ Ú©Û’ Ù„ÛŒÛ’ ÛØ§ÚºÛ”",
    privacySecurity: "Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ Ø§ÙˆØ± Ø³ÛŒÚ©ÛŒÙˆØ±Ù¹ÛŒ",
    isMyDataSafe: "Ú©ÛŒØ§ Ù…ÛŒØ±Ø§ ÚˆÛŒÙ¹Ø§ Ù…Ø­ÙÙˆØ¸ ÛÛ’ØŸ",
    yesWeEncrypt: "ÛØ§ÚºÛ” ÛÙ… ØªÙ…Ø§Ù… Ù¾ÛŒØºØ§Ù…Ø§Øª Ú©Ùˆ Ù‚Ø§Ø¨Ù„ ØªØ´ÙÛŒØ± Ú©Ø±ØªÛ’ ÛÛŒÚºØŒ 30 Ø¯Ù† Ø¨Ø¹Ø¯ Ø®ÙˆØ¯ Ø¨Ø®ÙˆØ¯ Ø­Ø°Ù Ú©Ø±ØªÛ’ ÛÛŒÚºØŒ Ø§ÙˆØ± Ú©Ø³ÛŒ Ú©Û’ Ø³Ø§ØªÚ¾ Ø´ÛŒØ¦Ø± Ù†ÛÛŒÚº Ú©Ø±ØªÛ’Û”",
    canYouRead: "Ú©ÛŒØ§ Ø¢Ù¾ Ù…ÛŒØ±Û’ Ù¾ÛŒØºØ§Ù…Ø§Øª Ù¾Ú‘Ú¾ Ø³Ú©ØªÛ’ ÛÛŒÚºØŸ",
    aiAnalyzesAuto: "ÛÙ…Ø§Ø±Ø§ AI Ø®ÙˆØ¯ Ø¨Ø®ÙˆØ¯ Ø§Ù† Ú©Ø§ ØªØ¬Ø²ÛŒÛ Ú©Ø±ØªØ§ ÛÛ’ØŒ Ù„ÛŒÚ©Ù† Ú©ÙˆØ¦ÛŒ Ø§Ù†Ø³Ø§Ù† Ú©Ø¨Ú¾ÛŒ Ø¢Ù¾ Ú©Û’ Ù¾ÛŒØºØ§Ù…Ø§Øª Ù†ÛÛŒÚº Ø¯ÛŒÚ©Ú¾ØªØ§Û”",
    whatDoYouDo: "Ø¢Ù¾ Ø§Ù¾ Ù„ÙˆÚˆ Ú©Ø±Ø¯Û Ø§Ø³Ú©Ø±ÛŒÙ† Ø´Ø§Ù¹Ø³ Ú©Û’ Ø³Ø§ØªÚ¾ Ú©ÛŒØ§ Ú©Ø±ØªÛ’ ÛÛŒÚºØŸ",
    sameAsText: "Ù¹ÛŒÚ©Ø³Ù¹ Ø¬ÛŒØ³Û’ - ØªØ¬Ø²ÛŒÛ Ú©Ø±ÛŒÚºØŒ Ù‚Ø§Ø¨Ù„ ØªØ´ÙÛŒØ± Ú©Ø±ÛŒÚºØŒ Ø§ÙˆØ± 30 Ø¯Ù† Ø¨Ø¹Ø¯ Ø®ÙˆØ¯ Ø¨Ø®ÙˆØ¯ Ø­Ø°Ù Ú©Ø±ÛŒÚºÛ” Ú©ÙˆØ¦ÛŒ Ø§Ù†Ø³Ø§Ù†ÛŒ Ø±Ø³Ø§Ø¦ÛŒ Ù†ÛÛŒÚºÛ”",
    usingSentinelAI: "SentinelAI Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ú©Ø± Ø±ÛÛ’ ÛÛŒÚº",
    howAccurate: "Ø´Ù†Ø§Ø®Øª Ú©ØªÙ†ÛŒ Ø¯Ø±Ø³Øª ÛÛ’ØŸ",
    continuouslyImproving: "ÛÙ… Ù…Ø³Ù„Ø³Ù„ Ø¨ÛØªØ±ÛŒ Ú©Ø± Ø±ÛÛ’ ÛÛŒÚºÛ” ÛÙ…Ø§Ø±Ø§ AI Ø¨Ú¾Ø§Ø±Øª Ú©Û’ Ù„ÛŒÛ’ Ù…Ø®ØµÙˆØµ ÛØ²Ø§Ø±ÙˆÚº Ù…Ø¹Ø±ÙˆÙ Ø¯Ú¾ÙˆÚ©Û’ Ú©Û’ Ù†Ù…ÙˆÙ†ÙˆÚº Ù¾Ø± ØªØ±Ø¨ÛŒØª ÛŒØ§ÙØªÛ ÛÛ’Û”",
    whatIfSays: "Ø§Ú¯Ø± ÛŒÛ Ú©ÛÛ’ Ú©Û Ù…ÛŒØ±Ø§ Ù¾ÛŒØºØ§Ù… Ù…Ø­ÙÙˆØ¸ ÛÛ’ Ù„ÛŒÚ©Ù† Ù…ÛŒÚº Ø§Ø¨Ú¾ÛŒ Ø¨Ú¾ÛŒ ØºÛŒØ± ÛŒÙ‚ÛŒÙ†ÛŒ ÛÙˆÚºØŸ",
    alwaysTrustInstinct: "ÛÙ…ÛŒØ´Û Ø§Ù¾Ù†Û’ Ø¨Ø±Ø§Û Ø±Ø§Ø³Øª Ú©Û’ Ø³Ø§ØªÚ¾ Ø±ÛÛŒÚºÛ” Ø§Ú¯Ø± Ú©Ú†Ú¾ ØºÙ„Ø· Ù„Ú¯ØªØ§ ÛÛ’ØŒ ØªÙˆ Ù„Ù†Ú©Ø³ Ù¾Ø± Ú©Ù„ÛŒÚ© Ù†Û Ú©Ø±ÛŒÚº ÛŒØ§ Ú©ÙˆØ¦ÛŒ Ø°Ø§ØªÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø´ÛŒØ¦Ø± Ù†Û Ú©Ø±ÛŒÚºÛ”",
    canIReport: "Ú©ÛŒØ§ Ù…ÛŒÚº ØºÙ„Ø· Ù†ØªØ§Ø¦Ø¬ Ú©ÛŒ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø± Ø³Ú©ØªØ§ ÛÙˆÚºØŸ",
    yesPleaseUse: "ÛØ§ÚºØŒ Ø¨Ø±Ø§Û Ù…ÛØ±Ø¨Ø§Ù†ÛŒÛ” ØªØ¬Ø²ÛŒÛ Ú©ÛŒ Ø±Ù¾ÙˆØ±Ù¹ Ù…ÛŒÚº ÙÛŒÚˆ Ø¨ÛŒÚ© Ø¨à¤ŸÙ† Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ú©Ø±ÛŒÚº ØªØ§Ú©Û ÛÙ…ÛŒÚº Ø¨ÛØªØ±ÛŒ Ù…ÛŒÚº Ù…Ø¯Ø¯ Ù…Ù„Û’Û”",
    whatIfClickedLink: "Ø§Ú¯Ø± Ù…ÛŒÚº Ù¾ÛÙ„Û’ ÛÛŒ Ø§ÛŒÚ© Ø¯Ú¾ÙˆÚ©Û’ ÙˆØ§Ù„Û’ Ù„Ù†Ú© Ù¾Ø± Ú©Ù„ÛŒÚ© Ú©Ø± Ú†Ú©Ø§ ÛÙˆÚº ØªÙˆ Ù…ÛŒÚº Ú©ÛŒØ§ Ú©Ø±ÙˆÚºØŸ",
    actImmediately: "ÙÙˆØ±ÛŒ Ø·ÙˆØ± Ù¾Ø± Ú©Ø§Ø±Ø±ÙˆØ§Ø¦ÛŒ Ú©Ø±ÛŒÚº: (1) Ø§Ù†Ù¹Ø±Ù†ÛŒÙ¹ Ø³Û’ Ù…Ù†Ù‚Ø·Ø¹ Ú©Ø±ÛŒÚºØŒ (2) Ú©Ú¾ÙˆÙ„ Ú¯ÛŒ ÛÙˆØ¦ÛŒ Ø³Ø§Ø¦Ù¹ Ù¾Ø± Ú©ÙˆØ¦ÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¯Ø§Ø®Ù„ Ù†Û Ú©Ø±ÛŒÚºØŒ (3) Ø§Ù¾Ù†Û’ Ø¨ÛŒÙ†Ú© Ú©ÛŒ Ø¯Ú¾ÙˆÚ©Û ÛÛŒÙ„ Ù„Ø§Ø¦Ù† Ú©Ùˆ Ú©Ø§Ù„ Ú©Ø±ÛŒÚºØŒ (4) ØªÙ…Ø§Ù… Ù¾Ø§Ø³ ÙˆØ±Úˆ ØªØ¨Ø¯ÛŒÙ„ Ú©Ø±ÛŒÚºØŒ (5) 48 Ú¯Ú¾Ù†Ù¹Û’ ØªÚ© Ø§Ù¾Ù†Û’ Ø§Ú©Ø§Ø¤Ù†Ù¹Ø³ Ú©ÛŒ Ù†Ú¯Ø±Ø§Ù†ÛŒ Ú©Ø±ÛŒÚºØŒ (6) Ø³Ø§Ø¦Ø¨Ø± Ú©Ø±ÛŒÙ… Ú©Ùˆ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÛŒÚº: 1930",
    canIUseWhatsapp: "Ú©ÛŒØ§ Ù…ÛŒÚº Ø§Ø³Û’ ÙˆÛØ§Ù¹Ø³ Ø§ÛŒÙ¾ ÛŒØ§ Ø¯ÙˆØ³Ø±ÛŒ Ø§ÛŒÙ¾ Ú©Û’ Ù¾ÛŒØºØ§Ù…Ø§Øª Ú©Û’ Ù„ÛŒÛ’ Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ú©Ø± Ø³Ú©ØªØ§ ÛÙˆÚºØŸ",
    yesPasteAnyText: "ÛØ§ÚºØŒ Ú©Ø³ÛŒ Ø¨Ú¾ÛŒ Ù¾Ù„ÛŒÙ¹ ÙØ§Ø±Ù… Ø³Û’ Ú©ÙˆØ¦ÛŒ Ø¨Ú¾ÛŒ Ù¹ÛŒÚ©Ø³Ù¹ Ù¾ÛŒØºØ§Ù… Ù¾ÛŒØ³Ù¹ Ú©Ø±ÛŒÚº - SMSØŒ ÙˆÛØ§Ù¹Ø³ Ø§ÛŒÙ¾ØŒ Ù¹ÛŒÙ„ÛŒ Ú¯Ø±Ø§Ù…ØŒ ÙÛŒØ³ Ø¨Ú©ØŒ Ø§ÛŒ Ù…ÛŒÙ„Û”",
    stillHaveQuestions: "Ø§Ø¨Ú¾ÛŒ Ø¨Ú¾ÛŒ Ø³ÙˆØ§Ù„Ø§Øª ÛÛŒÚºØŸ",
    emailUs: "ÛÙ…ÛŒÚº Ø§ÛŒ Ù…ÛŒÙ„ Ú©Ø±ÛŒÚº: support@sentinelai.com",
    responseTime: "Ø±Ø¯ Ø¹Ù…Ù„ Ú©Ø§ ÙˆÙ‚Øª: Ø¹Ø§Ù… Ø·ÙˆØ± Ù¾Ø± 24 Ú¯Ú¾Ù†Ù¹ÙˆÚº Ú©Û’ Ø§Ù†Ø¯Ø±",

    // Contact Page
    getTouchTitle: "Ø±Ø§Ø¨Ø·Û’ Ù…ÛŒÚº Ø¢Ø¦ÛŒÚº",
    haveQuestions: "Ø³ÙˆØ§Ù„Ø§Øª ÛÛŒÚºØŸ ÛÙ… Ø¢Ù¾ Ú©ÛŒ Ù…Ø¯Ø¯ Ú©Û’ Ù„ÛŒÛ’ ÛŒÛØ§Úº ÛÛŒÚºÛ” ÛÙ…ÛŒÚº Ø§ÛŒÚ© Ù¾ÛŒØºØ§Ù… Ø¨Ú¾ÛŒØ¬ÛŒÚº Ø§ÙˆØ± ÛÙ… 24 Ú¯Ú¾Ù†Ù¹ÙˆÚº Ù…ÛŒÚº Ø¬ÙˆØ§Ø¨ Ø¯ÛŒÚº Ú¯Û’Û”",
    fullName: "Ù…Ú©Ù…Ù„ Ù†Ø§Ù… *",
    yourName: "Ø¢Ù¾ Ú©Ø§ Ù†Ø§Ù…",
    emailAddress: "Ø§ÛŒ Ù…ÛŒÙ„ Ù¾ØªÛ *",
    youAtExample: "you@example.com",
    subject: "Ù…ÙˆØ¶ÙˆØ¹",
    selectSubject: "Ù…ÙˆØ¶ÙˆØ¹ Ù…Ù†ØªØ®Ø¨ Ú©Ø±ÛŒÚº",
    generalInquiry: "Ø¹Ø§Ù… Ù¾ÙˆÚ†Ú¾ Ú¯Ú†Ú¾",
    technicalSupport: "ØªÚ©Ù†ÛŒÚ©ÛŒ Ù…Ø¹Ø§ÙˆÙ†Øª",
    reportFalsePositive: "ØºÙ„Ø· Ù…Ø«Ø¨Øª Ú©ÛŒ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÛŒÚº",
    reportScam: "Ø¯Ú¾ÙˆÚ©Û’ Ú©ÛŒ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÛŒÚº",
    partnershipOpportunity: "Ø´Ø±Ø§Ú©Øª Ø¯Ø§Ø±ÛŒ Ú©Ø§ Ù…ÙˆÙ‚Ø¹",
    pressMedia: "Ù¾Ø±ÛŒØ³/Ù…ÛŒÚˆÛŒØ§ Ø§Ø³ØªÙØ³Ø§Ø±",
    other: "Ø¯ÛŒÚ¯Ø±",
    messageLabel: "Ù¾ÛŒØºØ§Ù… *",
    howCanWeHelp: "ÛÙ… Ø¢Ù¾ Ú©ÛŒ Ú©ÛŒØ³Û’ Ù…Ø¯Ø¯ Ú©Ø± Ø³Ú©ØªÛ’ ÛÛŒÚºØŸ",
    sendMessage: "Ù¾ÛŒØºØ§Ù… Ø¨Ú¾ÛŒØ¬ÛŒÚº",
    responseTimeContact: "Ø¹Ø§Ù… Ø·ÙˆØ± Ù¾Ø± 24 Ú¯Ú¾Ù†Ù¹ÙˆÚº Ú©Û’ Ø§Ù†Ø¯Ø±",
    mondayFriday: "Ù¾ÛŒØ±-Ø¬Ù…Ø¹ÛØŒ 9 ØµØ¨Ø­ - 6 Ø´Ø§Ù… IST",
    alreadyBeenScammed: "Ù¾ÛÙ„Û’ Ø³Û’ ÛÛŒ Ø¯Ú¾ÙˆÚ©Û’ Ú©Ø§ Ø´Ú©Ø§Ø±ØŸ",
    dontWaitReport: "Ø§Ù†ØªØ¸Ø§Ø± Ù†Û Ú©Ø±ÛŒÚº - ÙÙˆØ±ÛŒ Ø·ÙˆØ± Ù¾Ø± Ø§Ø®ØªÛŒØ§Ø±Ø§Øª Ú©Ùˆ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÛŒÚº:",
    cyberCrimeHelpline: "Ø³Ø§Ø¦Ø¨Ø± Ú©Ø±ÛŒÙ… ÛÛŒÙ„ Ù¾ Ù„Ø§Ø¦Ù†: 1930",
    available24By7: "24/7 Ø¯Ø³ØªÛŒØ§Ø¨ â€¢ ÙÙˆØ±ÛŒ Ø§Ù¾Ù†Û’ Ø¨ÛŒÙ†Ú© Ú©Ùˆ Ú©Ø§Ù„ Ú©Ø±ÛŒÚº",
    connectWithUs: "ÛÙ…Ø§Ø±Û’ Ø³Ø§ØªÚ¾ Ø±Ø§Ø¨Ø·Û’ Ù…ÛŒÚº Ø±ÛÛŒÚº",

    // FAQ Page
    faqTitle: "Ø§Ú©Ø«Ø± Ù¾ÙˆÚ†Ú¾Û’ Ø¬Ø§Ù†Û’ ÙˆØ§Ù„Û’ Ø³ÙˆØ§Ù„Ø§Øª",
    whatIsSmishing: "Smishing Ú©ÛŒØ§ ÛÛ’ Ø§ÙˆØ± ÛŒÛ Ú©ÛŒØ³Û’ Ú©Ø§Ù… Ú©Ø±ØªØ§ ÛÛ’ØŸ",
    smishingDef: "Smishing SMS phishing ÛÛ’ - Ø¯Ú¾ÙˆÚ©Ø§à¦§Ú‘ÛŒ ÙˆØ§Ù„Û’ Ù¹ÛŒÚ©Ø³Ù¹ Ù¾ÛŒØºØ§Ù…Ø§Øª Ø°Ø§ØªÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÛŒØ§ Ø±Ù‚Ù… Ú†ÙˆØ±ÛŒ Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ ÚˆÛŒØ²Ø§Ø¦Ù† Ú©ÛŒÛ’ Ú¯Ø¦Û’Û” Ø¯Ú¾ÙˆÚ©Û Ø¨Ø§Ø² Ø¨ÛŒÙ†Ú©ØŒ Ø­Ú©ÙˆÙ…ØªÛŒ Ø§ÛŒØ¬Ù†Ø³ÛŒØ§ÚºØŒ ÛŒØ§ Ú©Ù…Ù¾Ù†ÛŒÙˆÚº Ú©ÛŒ Ù†Ù‚Ù„ Ú©Ø±ØªÛ’ ÛÛŒÚº ØªØ§Ú©Û Ø¢Ù¾ Ú©Ùˆ Ù†Ù‚ØµØ§Ù† Ø¯Û Ù„Ù†Ú©Ø³ Ù¾Ø± Ú©Ù„ÛŒÚ© Ú©Ø±Ù†Û’ ÛŒØ§ Ø­Ø³Ø§Ø³ ÚˆÛŒÙ¹Ø§ Ø´ÛŒØ¦Ø± Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ ÙØ±ÛŒØ¨ Ø¯ÛŒØ§ Ø¬Ø§Ø¦Û’Û”",
    howAccurateIs: "Ø¢Ù¾ Ú©Ø§ Ø´Ù†Ø§Ø®Øª Ú©Ø§ Ù†Ø¸Ø§Ù… Ú©ØªÙ†Ø§ Ø¯Ø±Ø³Øª ÛÛ’ØŸ",
    accuracyDef: "ÛÙ…Ø§Ø±Ø§ AI 98Ùª Ø¯Ø±Ø³ØªÚ¯ÛŒ Ø­Ø§ØµÙ„ Ú©Ø±ØªØ§ ÛÛ’Û” ÛÙ… Ø¨Ú¾Ø§Ø±Øª Ù…ÛŒÚº Ø±Ù¾ÙˆØ±Ù¹ Ø´Ø¯Û Ù†Ø¦Û’ Ø¯Ú¾ÙˆÚ©Û’ Ú©ÛŒ ØªÚ©Ù†ÛŒÚ©ÙˆÚº Ù¾Ø± Ù…Ø³Ù„Ø³Ù„ ØªØ±Ø¨ÛŒØª Ø¯ÛŒØªÛ’ ÛÛŒÚºÛ”",
    isReallyFree: "Ú©ÛŒØ§ ÛŒÛ Ø³Ø±ÙˆØ³ ÙˆØ§Ù‚Ø¹ÛŒ Ù…ÙØª ÛÛ’ØŸ",
    freeAnswer: "ÛØ§Úº! SentinelAI Ø¨Ø§Ù„Ú©Ù„ Ù…ÙØª ÛÛ’Û” ÛÙ…Ø§Ø±Ø§ Ù…Ø´Ù† Ø¯ÛŒÛÛŒ Ø¨Ú¾Ø§Ø±Øª Ú©Ùˆ SMS Ø¯Ú¾ÙˆÚ©Û’ Ø³Û’ Ø¨Ú†Ø§Ù†Ø§ ÛÛ’ØŒ Ù…Ù†Ø§ÙØ¹ Ù†ÛÛŒÚºÛ”",
    languagesSupported: "Ú©ÙˆÙ† Ø³ÛŒ Ø²Ø¨Ø§Ù†ÛŒÚº Ù…Ø¹Ø§ÙˆÙ† ÛÛŒÚºØŸ",
    languagesAnswer: "ÛÙ… Ø§Ø±Ø¯ÙˆØŒ ÛÙ†Ø¯ÛŒØŒ Ø§ÙˆØ± ØªÛŒÙ„Ú¯Ùˆ Ú©Ùˆ Ø³Ù¾ÙˆØ±Ù¹ Ú©Ø±ØªÛ’ ÛÛŒÚºÛ” Ù…Ø²ÛŒØ¯ Ø¹Ù„Ø§Ù‚Ø§Ø¦ÛŒ Ø²Ø¨Ø§Ù†ÛŒÚº Ø¬Ù„Ø¯ Ø¢ Ø±ÛÛŒ ÛÛŒÚº!",
    dataSecurePrivate: "Ú©ÛŒØ§ Ù…ÛŒØ±Ø§ ÚˆÛŒÙ¹Ø§ Ù…Ø­ÙÙˆØ¸ Ø§ÙˆØ± Ù†Ø¬ÛŒ ÛÛ’ØŸ",
    dataSecureAnswer: "Ø¨Ø§Ù„Ú©Ù„Û” Ù¾ÛŒØºØ§Ù…Ø§Øª Ù‚Ø§Ø¨Ù„ ØªØ´ÙÛŒØ± ÛÛŒÚºØŒ Ù…Ø­ÙÙˆØ¸ Ø·Ø±ÛŒÙ‚Û’ Ø³Û’ ØªØ¬Ø²ÛŒÛ Ú©ÛŒÛ’ Ø¬Ø§ØªÛ’ ÛÛŒÚºØŒ Ø§ÙˆØ± 30 Ø¯Ù† Ø¨Ø¹Ø¯ Ø®ÙˆØ¯ Ø¨Ø®ÙˆØ¯ Ø­Ø°Ù ÛÙˆ Ø¬Ø§ØªÛ’ ÛÛŒÚºÛ” ÛÙ… Ú©Ø¨Ú¾ÛŒ Ø¢Ù¾ Ú©Ø§ ÚˆÛŒÙ¹Ø§ Ø´ÛŒØ¦Ø± Ù†ÛÛŒÚº Ú©Ø±ØªÛ’Û”",
    whatIfFellForScam: "Ø§Ú¯Ø± Ù…ÛŒÚº Ù¾ÛÙ„Û’ Ø³Û’ ÛÛŒ Ø¯Ú¾ÙˆÚ©Û’ Ù…ÛŒÚº Ù¾Ú‘ Ú¯ÛŒØ§ ØªÙˆ Ù…ÛŒÚº Ú©ÛŒØ§ Ú©Ø±ÙˆÚºØŸ",
    scamReaction: "ÙÙˆØ±ÛŒ Ø·ÙˆØ± Ù¾Ø± Ú©Ø§Ø±Ø±ÙˆØ§Ø¦ÛŒ Ú©Ø±ÛŒÚº: 1) Ø§Ú©Ø§Ø¤Ù†Ù¹Ø³ Ù…Ù†Ø¬Ù…Ø¯ Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ Ø§Ù¾Ù†Û’ Ø¨ÛŒÙ†Ú© Ú©Ùˆ Ú©Ø§Ù„ Ú©Ø±ÛŒÚºØŒ 2) Ø³Ø§Ø¦Ø¨Ø± Ú©Ø±ÛŒÙ… ÛÛŒÙ„ Ù¾ Ù„Ø§Ø¦Ù† 1930 Ú©Ùˆ Ø±Ù¾ÙˆØ±Ù¹ Ú©Ø±ÛŒÚºØŒ 3) ØªÙ…Ø§Ù… Ù¾Ø§Ø³ ÙˆØ±Úˆ ØªØ¨Ø¯ÛŒÙ„ Ú©Ø±ÛŒÚºØŒ 4) cybercrime.gov.in Ù¾Ø± Ø´Ú©Ø§ÛŒØª Ø¯Ø±Ø¬ Ú©Ø±ÛŒÚº",

    // Demo Page
    demoIntro: "ÛŒÛ Ø§ÛŒÚ© Ù†Ù…ÙˆÙ†Û’ Ú©Û’ Ù¾ÛŒØºØ§Ù… Ú©Û’ Ø³Ø§ØªÚ¾ Ø§ÛŒÚ© ÚˆÛŒÙ…Ùˆ ÛÛ’Û” Ø§Ù¾Ù†Û’ Ø®ÙˆØ¯ Ú©Û’ Ù¾ÛŒØºØ§Ù…Ø§Øª Ú©Ùˆ ØªØ¬Ø²ÛŒÛ Ú©Ø±Ù†Û’ Ú©Û’ Ù„ÛŒÛ’ Ø³Ø§Ø¦Ù† Ø§Ù¾ Ú©Ø±ÛŒÚºÛ”",
    signUpFree: "Ù…ÙØª Ø³Ø§Ø¦Ù† Ø§Ù¾ Ú©Ø±ÛŒÚº",
    tryDemoAnalysis: "ÚˆÛŒÙ…Ùˆ ØªØ¬Ø²ÛŒÛ Ø¢Ø²Ù…Ø§Ø¦ÛŒÚº",
    demoAnalysesRemaining: "ÚˆÛŒÙ…Ùˆ ØªØ¬Ø²ÛŒÛ Ø¨Ø§Ù‚ÛŒ ÛÛ’Û” Ù„Ø§Ù…Ø­Ø¯ÙˆØ¯ Ø±Ø³Ø§Ø¦ÛŒ Ú©Û’ Ù„ÛŒÛ’ Ø³Ø§Ø¦Ù† Ø§Ù¾ Ú©Ø±ÛŒÚºÛ”",
    sendersNumber: "Ø¨Ú¾ÛŒØ¬Ù†Û’ ÙˆØ§Ù„Û’ Ú©Ø§ Ù†Ù…Ø¨Ø±",
    messageText: "Ù¾ÛŒØºØ§Ù… Ú©ÛŒ Ù…ØªÙ†",
    sampleMessage: "ÙÙˆØ±ÛŒ: Ø¢Ù¾ Ú©Ø§ SBI Ø§Ú©Ø§Ø¤Ù†Ù¹ KYC ØªØµØ¯ÛŒÙ‚ Ú©ÛŒ ÙˆØ¬Û Ø³Û’ Ø¹Ø§Ø±Ø¶ÛŒ Ø·ÙˆØ± Ù¾Ø± Ù…Ø¹Ø·Ù„ Ú©Ø± Ø¯ÛŒØ§ Ú¯ÛŒØ§ ÛÛ’Û” ÙÙˆØ±ÛŒ ØªØµØ¯ÛŒÙ‚ Ú©Û’ Ù„ÛŒÛ’ ÛŒÛØ§Úº Ú©Ù„ÛŒÚ© Ú©Ø±ÛŒÚº: bit.ly/sbi-kyc-2024 ÛŒØ§ Ø¢Ù¾ Ú©Ø§ Ø§Ú©Ø§Ø¤Ù†Ù¹ 24 Ú¯Ú¾Ù†Ù¹ÙˆÚº Ù…ÛŒÚº Ø¨Ù†Ø¯ ÛÙˆ Ø¬Ø§Ø¦Û’ Ú¯Ø§Û” Ú©Ø³Ù¹Ù…Ø± Ú©ÛŒØ¦Ø±: 1800-XXXX",
    analyzingContent: "Ù¾ÛŒØºØ§Ù… Ú©Ùˆ ØªØ¬Ø²ÛŒÛ Ú©Ø± Ø±ÛÛ’ ÛÛŒÚº...",
    checkingSender: "Ø¨Ú¾ÛŒØ¬Ù†Û’ ÙˆØ§Ù„Û’ Ú©ÛŒ Ø³Ø§Ú©Ú¾ Ú©Ùˆ ÛŒÙ‚ÛŒÙ†ÛŒ Ø¨Ù†Ø§ Ø±ÛÛ’ ÛÛŒÚº...",
    scanningMalicious: "Ù†Ù‚ØµØ§Ù† Ø¯Û Ù„Ù†Ú©Ø³ Ú©Û’ Ù„ÛŒÛ’ Ø§Ø³Ú©ÛŒÙ† Ú©Ø± Ø±ÛÛ’ ÛÛŒÚº...",
    generatingReport: "Ø®Ø·Ø±Û Ø±Ù¾ÙˆØ±Ù¹ ØªÛŒØ§Ø± Ú©Ø± Ø±ÛÛ’ ÛÛŒÚº...",
    likelySmishing: "ÛŒÛ Ù¾ÛŒØºØ§Ù… Ù…Ù…Ú©Ù†Û Ø·ÙˆØ± Ù¾Ø± Ø§ÛŒÚ© Smishing Ú©ÙˆØ´Ø´ ÛÛ’",
    doNotClickLinksDemo: "Ù„Ù†Ú©Ø³ Ù¾Ø± Ú©Ù„ÛŒÚ© Ù†Û Ú©Ø±ÛŒÚº ÛŒØ§ Ø°Ø§ØªÛŒ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø´ÛŒØ¦Ø± Ù†Û Ú©Ø±ÛŒÚº",
    suspiciousLinkDetectedDemo: "Ù…Ø´Ú©ÙˆÚ© Ù„Ù†Ú© Ø¯Ø±ÛŒØ§ÙØª ÛÙˆØ§",
    containsShortened: "Ù…Ø®ØªØµØ± URL (bit.ly) Ù¾Ø± Ù…Ø´ØªÙ…Ù„ ÛÛ’",
    urgencyTacticsDemo: "ÙÙˆØ±ÛŒ Ø±Ø§Ø¦Û’",
    createsArtificial: "Ù…ØµÙ†ÙˆØ¹ÛŒ ÙˆÙ‚Øª Ú©Ø§ Ø¯Ø¨Ø§Ø¤ Ø¨Ù†Ø§ØªØ§ ÛÛ’ (24 Ú¯Ú¾Ù†Ù¹Û’)",
    bankImpersonation: "Ø¨ÛŒÙ†Ú© Ú©ÛŒ Ù†Ù‚Ù„",
    pretendsSbi: "SBI Ø³Û’ ÛÙˆÙ†Û’ Ú©Ø§ Ø¯Ø¹ÙˆÛŒÙ° Ú©Ø±ØªØ§ ÛÛ’",
    kycScamPattern: "KYC Ø¯Ú¾ÙˆÚ©Û Ú©Û’ Ù†Ù…ÙˆÙ†Û’",
    matchesKnownKyc: "Ù…Ø¹Ø±ÙˆÙ KYC Ø¯Ú¾ÙˆÚ©Û’ Ú©Û’ Ù†Ù…ÙˆÙ†Û’ Ø³Û’ Ù…Ù…Ø§Ø«Ù„",
    analysisCompleteDemo: "ØªØ¬Ø²ÛŒÛ Ù…Ú©Ù…Ù„",
    riskLevelDemo: "Ø®Ø·Ø±Û Ú©ÛŒ Ø³Ø·Ø­: Ø§Ø¹Ù„ÛŒ (92/100)",

    // Terms Page
    termsOfService: "Ø®Ø¯Ù…Ø§Øª Ú©ÛŒ Ø´Ø±Ø§Ø¦Ø·",
    termsLastUpdated: "Ø¢Ø®Ø±ÛŒ ØªØ§Ø²Û Ú©Ø§Ø±ÛŒ: Ø¬Ù†ÙˆØ±ÛŒ 7ØŒ 2026",

    // Privacy Page
    privacyPolicy: "Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ Ú©ÛŒ Ù¾Ø§Ù„ÛŒØ³ÛŒ",
    privacyLastUpdated: "Ø¢Ø®Ø±ÛŒ ØªØ§Ø²Û Ú©Ø§Ø±ÛŒ: Ø¬Ù†ÙˆØ±ÛŒ 7ØŒ 2026",

    // Data Security Page
    dataSecurity: "ÚˆÛŒÙ¹Ø§ Ø³ÛŒÚ©ÛŒÙˆØ±Ù¹ÛŒ",
    securityLastUpdated: "Ø¢Ø®Ø±ÛŒ ØªØ§Ø²Û Ú©Ø§Ø±ÛŒ: Ø¬Ù†ÙˆØ±ÛŒ 7ØŒ 2026",
    endToEndEncryption: "Ø§Ø®ØªØªØ§Ù… Ø³Û’ Ø§Ø®ØªØªØ§Ù… ØªÚ© Encryption",
    tlsDescription: "SentinelAI Ø³Û’ ØªÙ…Ø§Ù… ÚˆÛŒÙ¹Ø§ TLS 1.3 Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ú©Ø±ØªÛ’ ÛÙˆØ¦Û’ Ù‚Ø§Ø¨Ù„ ØªØ´ÙÛŒØ± ÛÛ’",
    secureInfrastructure: "Ù…Ø­ÙÙˆØ¸ Ø¨Ù†ÛŒØ§Ø¯ÛŒ ÚˆÚ¾Ø§Ù†Ú†Û",
    socCompliant: "ÛÙ…Ø§Ø±Û’ Ø³Ø±ÙˆØ±Ø² Ø¨Ú¾Ø§Ø±Øª Ù…ÛŒÚº SOC 2 Ù‚Ø§Ø¨Ù„Ù Ù…ÙˆØ§ÙÙ‚Øª ÚˆÛŒÙ¹Ø§ Ø³Ù†Ù¹Ø±Ø² Ù…ÛŒÚº Ø­Ø§ØµÙ„ ÛÛŒÚº",
    privacyByDesign: "ÚˆÛŒØ²Ø§Ø¦Ù† Ú©Û’ Ù„Ø­Ø§Ø¸ Ø³Û’ Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ",
    collectEssentialOnly: "ÛÙ… ØµØ±Ù Ø¶Ø±ÙˆØ±ÛŒ ÚˆÛŒÙ¹Ø§ Ø¬Ù…Ø¹ Ú©Ø±ØªÛ’ ÛÛŒÚº Ø§ÙˆØ± Ø¬ÛØ§Úº Ù…Ù…Ú©Ù† ÛÙˆ Ú¯Ù…Ù†Ø§Ù… Ú©Ø±ØªÛ’ ÛÛŒÚº",
    accessControls: "Ø±Ø³Ø§Ø¦ÛŒ Ú©Ø§ Ú©Ù†Ù¹Ø±ÙˆÙ„",
    roleBasedAccess: "Ø³Ø®Øª Ú©Ø±Ø¯Ø§Ø± Ù¾Ø± Ù…Ø¨Ù†ÛŒ Ø±Ø³Ø§Ø¦ÛŒ Ú©Ù†Ù¹Ø±ÙˆÙ„ Ø¢Ù¾ Ú©Û’ ÚˆÛŒÙ¹Ø§ Ú©Ùˆ Ø§Ù†Ø¯Ø±ÙˆÙ†ÛŒ Ø·ÙˆØ± Ù¾Ø± Ù…Ø­ÙÙˆØ¸ Ú©Ø±ØªÛ’ ÛÛŒÚº",
    encryptionPractices: "Encryption Ú©Û’ Ø·Ø±ÛŒÙ‚Û’",
    industryLeadingStandards: "ÛÙ… ØµÙ†Ø¹Øª Ú©ÛŒ Ù‚ÛŒØ§Ø¯Øª Ú©Ø±ØªÛ’ ÛÙˆØ¦Û’ Encryption Ù…Ø¹ÛŒØ§Ø± Ø§Ø³ØªØ¹Ù…Ø§Ù„ Ú©Ø±ØªÛ’ ÛÛŒÚº:",
    tlsInTransit: "ØªÙ…Ø§Ù… ÚˆÛŒÙ¹Ø§-Ù…ÛŒÚº-Ù¹Ø±Ø§Ù†Ø²Ù¹ Ú©Û’ Ù„ÛŒÛ’ TLS 1.3",
    aes256Rest: "Ø¢Ø±Ø§Ù… Ù…ÛŒÚº ÚˆÛŒÙ¹Ø§ Ú©Û’ Ù„ÛŒÛ’ AES-256 Encryption",
    secureKeyManagement: "Ø¨Ø§Ù‚Ø§Ø¹Ø¯Û Ú¯Ø±Ø¯Ø´ Ú©Û’ Ø³Ø§ØªÚ¾ Ù…Ø­ÙÙˆØ¸ Ú©Ù„ÛŒØ¯ Ø§Ù†ØªØ¸Ø§Ù…",
    perfectForward: "Ù…ÙˆØ§ØµÙ„Ø§Øª Ø³ÛŒØ´Ù† Ú©Û’ Ù„ÛŒÛ’ Ú©Ø§Ù…Ù„ ÙØ§Ø±ÙˆØ±Úˆ Ø±Ø§Ø²Ø¯Ø§Ø±ÛŒ",
    complianceStandards: "Ù…ÙˆØ§ÙÙ‚Øª Ú©Û’ Ù…Ø¹ÛŒØ§Ø±",
    adheres: "SentinelAI Ù…Ù†Ø¯Ø±Ø¬Û Ø°ÛŒÙ„ Ú©ÛŒ Ù¾Ø§Ø¨Ù†Ø¯ÛŒ Ú©Ø±ØªØ§ ÛÛ’:",
    itAct: "Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù¹ÛŒÚ©Ù†Ø§Ù„ÙˆØ¬ÛŒ Ø§ÛŒÚ©Ù¹ØŒ 2000 (Ø¨Ú¾Ø§Ø±Øª)",
    personalDataProtection: "Ø°Ø§ØªÛŒ ÚˆÛŒÙ¹Ø§ Ø­ÙØ§Ø¸Øª Ú©ÛŒ ÛØ¯Ø§ÛŒØ§Øª",
  },
  tamil: {
    // Navigation
    home: "à®µà¯€à®Ÿà¯",
    about: "à®ªà®±à¯à®±à®¿",
    help: "à®‰à®¤à®µà®¿",
    tryDemo: "à®Ÿà¯†à®®à¯‹ à®®à¯à®¯à®²à¯",
    analyze: "à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯",
    history: "à®µà®°à®²à®¾à®±à¯",
    settings: "à®…à®®à¯ˆà®ªà¯à®ªà¯à®•à®³à¯",
    login: "à®‰à®³à¯à®¨à¯à®´à¯ˆà®•",
    signUp: "à®ªà®¤à®¿à®µà¯ à®šà¯†à®¯à¯",
    logout: "à®µà¯†à®³à®¿à®¯à¯‡à®±à¯",

    // Hero Section
    heroStat: "â‚¹1,200 à®•à¯‹à®Ÿà®¿",
    heroStatDesc: "à®•à®Ÿà®¨à¯à®¤ à®†à®£à¯à®Ÿà¯ à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà®¿à®²à¯ à®Žà®¸à¯à®Žà¦®à¦à®¸æ¬ºè¯ˆ à®‡à®²à¯ à®‡à®´à®¨à¯à®¤à®¤à¯",
    heroTitle: "æ¬ºè¯ˆ à®¨à®¿à®±à¯à®¤à¯à®¤à¯.",
    heroTitleGradient: "à®‰à®™à¯à®•à®³à¯ à®ªà®£à®¤à¯à®¤à¯ˆ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà®¾à®• à®µà¯ˆà®¤à¯à®¤à®¿à®°à¯à®•à¯à®•à®µà¯à®®à¯.",
    heroDescription: "à®à®¤à¯‡à®©à¯à®®à¯ à®šà®¨à¯à®¤à¯‡à®•à®¤à¯à®¤à®¿à®±à¯à®•à®¿à®¯ à®šà¯†à®¯à¯à®¤à®¿ à®’à®Ÿà¯à®Ÿà®µà¯à®®à¯. à®Žà®™à¯à®•à®³à¯ AI 3 à®µà®¿à®©à®¾à®Ÿà®¿à®•à®³à®¿à®²à¯ à®šà®°à®¿à®ªà®¾à®°à¯à®•à¯à®•à®¿à®±à®¤à¯. à®¤à®®à®¿à®´à¯, à®¹à®¿à®¨à¯à®¤à®¿ à®…à®²à¯à®²à®¤à¯ à®¤à¯†à®²à¯à®™à¯à®•à¯ à®µà®´à®™à¯à®• à®¤à¯†à®³à®¿à®µà®¾à®© à®ªà®¤à®¿à®²à¯ à®•à®¿à®Ÿà¯ˆà®•à¯à®•à®µà¯à®®à¯. à®®à¯à®±à¯à®±à®¿à®²à¯à®®à¯ à®‡à®²à®µà®šà®®à¯.",
    analyzeButton: "à®‡à®ªà¯à®ªà¯‹à®¤à¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®•",
    tryFreeButton: "à®‡à®²à®µà®šà®®à®¾à®• à®®à¯à®¯à®²à¯à®• (3 à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯)",
    analyzeMessage: "à®’à®°à¯ à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®¯à¯à®™à¯à®•à®³à¯",
    seeHowItWorks: "à®‡à®¤à¯ à®Žà®µà¯à®µà®¾à®±à¯ à®šà¯†à®¯à®²à¯à®ªà®Ÿà¯à®•à®¿à®±à®¤à¯ à®Žà®©à¯à®ªà®¤à¯ˆ à®ªà®¾à®°à¯à®•à¯à®•à®µà¯à®®à¯",
    aiAssistant: "AI à®‰à®¤à®µà®¿à®¯à®¾à®³à®°à¯",

    // Features Section
    whySentinelAI: "à®à®©à¯ SentinelAI?",
    featureSpeed: "3-à®µà®¿à®©à®¾à®Ÿà®¿ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯",
    featureSpeedDesc: "à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®’à®Ÿà¯à®Ÿà®µà¯à®®à¯, à®‰à®Ÿà®©à®Ÿà®¿ à®ªà®¤à®¿à®²à¯ à®ªà¯†à®±à¯à®™à¯à®•à®³à¯. à®Žà®¨à¯à®¤ à®¨à®¿à®±à¯à®¤à¯à®¤à®®à¯ à®‡à®²à¯à®²à¯ˆ, à®Žà®¨à¯à®¤ à®¤à¯Šà®²à¯à®²à¯ˆ à®‡à®²à¯à®²à¯ˆ.",
    featureLanguage: "à®‰à®™à¯à®•à®³à¯ à®®à¯Šà®´à®¿ à®ªà¯‡à®šà¯à®•à®¿à®±à®¤à¯",
    featureLanguageDesc: "à®¤à®®à®¿à®´à¯, à®¹à®¿à®¨à¯à®¤à®¿, à®¤à¯†à®²à¯à®™à¯à®•à¯, à®‰à®°à¯à®¤à¯ à®®à®±à¯à®±à¯à®®à¯ à®¤à®®à®¿à®´à¯ à®®à¯Šà®´à®¿à®•à®³à®¿à®²à¯ à®®à¯à®´à¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯. à®Žà®³à®¿à®¯ à®šà¯Šà®±à¯à®•à®³à¯, à®¤à¯†à®³à®¿à®µà®¾à®© à®µà®¿à®³à®•à¯à®•à®®à¯.",
    featureRural: "à®•à®¿à®°à®¾à®®à®ªà¯à®ªà¯à®± à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà¯à®•à¯à®•à¯ à®•à®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯",
    featureRuralDesc: "à®…à®©à¯ˆà®µà®°à¯à®•à¯à®•à¯à®®à¯ à®µà®Ÿà®¿à®µà®®à¯ˆà®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯. à®¤à¯Šà®´à®¿à®²à¯à®¨à¯à®Ÿà¯à®ª à®…à®±à®¿à®µà¯ à®¤à¯‡à®µà¯ˆ à®‡à®²à¯à®²à¯ˆ. à®Žà®ªà¯à®ªà¯‹à®¤à¯à®®à¯ à®‡à®²à®µà®šà®®à¯.",
    featureSecurity: "à®¤à®©à®¿à®ªà¯à®ªà®Ÿà¯à®Ÿ à®®à®±à¯à®±à¯à®®à¯ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà®¾à®©",
    featureSecurityDesc: "à®‰à®™à¯à®•à®³à¯ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ à®¤à®©à®¿à®ªà¯à®ªà®Ÿà¯à®Ÿà®¤à®¾à®• à®‡à®°à¯à®•à¯à®•à¯à®®à¯. à®¨à®¾à®™à¯à®•à®³à¯ à®…à®µà®±à¯à®±à¯ˆ 30 à®¨à®¾à®Ÿà¯à®•à®³à¯à®•à¯à®•à¯à®ªà¯ à®ªà®¿à®±à®•à¯ à®¨à¯€à®•à¯à®•à¯à®•à®¿à®±à¯‹à®®à¯. à®•à®£à¯à®•à®¾à®£à®¿à®ªà¯à®ªà¯ à®‡à®²à¯à®²à¯ˆ, à®µà®¿à®³à®®à¯à®ªà®°à®™à¯à®•à®³à¯ à®‡à®²à¯à®²à¯ˆ.",

    // Trust Section (badges)
    trustFreeTitle: "100% à®‡à®¤à®±à¯à®•à¯à®®à¯ à®®à¯‡à®²à®¾à®• à®‡à®²à®µà®šà®®à¯",
    trustFreeDesc: "à®•à®¿à®°à¯†à®Ÿà®¿à®Ÿà¯ à®•à®¾à®°à¯à®Ÿà¯ à®¤à¯‡à®µà¯ˆ à®‡à®²à¯à®²à¯ˆ. à®’à®°à¯à®ªà¯‹à®¤à®¾à®•.",
    trustLangsTitle: "5 à®®à¯Šà®´à®¿à®•à®³à¯",
    trustLangsDesc: "à®¤à®®à®¿à®´à¯, à®¹à®¿à®¨à¯à®¤à®¿, à®¤à¯†à®²à¯à®™à¯à®•à¯, à®‰à®°à¯à®¤à¯ à®®à®±à¯à®±à¯à®®à¯ à®¤à®®à®¿à®´à¯ à®†à®¤à®°à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®•à®¿à®±à®¤à¯",
    trustIndiaTitle: "à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà¯à®•à¯à®•à¯ à®•à®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯",
    trustIndiaDesc: "à®‡à®¨à¯à®¤à®¿à®¯ à®®à¯‹à®šà®Ÿà®¿ à®µà®Ÿà®¿à®µà®™à¯à®•à®³à¯à®•à¯à®•à¯ à®•à¯à®±à®¿à®ªà¯à®ªà®¾à®• à®•à®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯",
    trustSecurityTitle: "à®¤à®©à®¿à®®à¯ˆ à®®à¯à®¤à®²à®¿à®²à¯",
    trustSecurityDesc: "à®‰à®™à¯à®•à®³à¯ à®¤à®°à®µà¯ à®•à¯à®±à®¿à®¯à®¾à®•à¯à®•à®®à¯ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯ à®®à®±à¯à®±à¯à®®à¯ à®¤à®¾à®©à®¾à®• à®¨à¯€à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®•à®¿à®±à®¤à¯",

    // Chatbot

    // Trust Section (badges)
    trustFreeTitle: "100% à®‡à®¤à®±à¯à®•à¯à®®à¯ à®®à¯‡à®²à®¾à®• à®‡à®²à®µà®šà®®à¯",
    trustFreeDesc: "à®•à®¿à®°à¯†à®Ÿà®¿à®Ÿà¯ à®•à®¾à®°à¯à®Ÿà¯ à®¤à¯‡à®µà¯ˆ à®‡à®²à¯à®²à¯ˆ. à®’à®°à¯à®ªà¯‹à®¤à®¾à®•.",
    trustLangsTitle: "5 à®®à¯Šà®´à®¿à®•à®³à¯",
    trustLangsDesc: "à®¤à®®à®¿à®´à¯, à®¹à®¿à®¨à¯à®¤à®¿, à®¤à¯†à®²à¯à®™à¯à®•à¯, à®‰à®°à¯à®¤à¯ à®®à®±à¯à®±à¯à®®à¯ à®¤à®®à®¿à®´à¯ à®†à®¤à®°à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®•à®¿à®±à®¤à¯",
    trustIndiaTitle: "à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà¯à®•à¯à®•à¯ à®•à®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯",
    trustIndiaDesc: "à®‡à®¨à¯à®¤à®¿à®¯ à®®à¯‹à®šà®Ÿà®¿ à®µà®Ÿà®¿à®µà®™à¯à®•à®³à¯à®•à¯à®•à¯ à®•à¯à®±à®¿à®ªà¯à®ªà®¾à®• à®•à®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯",
    trustSecurityTitle: "à®¤à®©à®¿à®®à¯ˆ à®®à¯à®¤à®²à®¿à®²à¯",
    trustSecurityDesc: "à®‰à®™à¯à®•à®³à¯ à®¤à®°à®µà¯ à®•à¯à®±à®¿à®¯à®¾à®•à¯à®•à®®à¯ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯ à®®à®±à¯à®±à¯à®®à¯ à®¤à®¾à®©à®¾à®• à®¨à¯€à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®•à®¿à®±à®¤à¯",

    // Statistics Section
    stats1Title: "SMS à®®à¯‹à®šà®£à¯ˆ à®•à®£à¯à®Ÿà®±à®¿à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà®¤à¯",
    stats2Title: "à®ªà®¯à®©à®°à¯à®•à®³à¯ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà¯",
    stats3Title: "à®¤à®µà®±à®¾à®© à®¨à¯‡à®°à¯à®®à®±à¯ˆ",

    // CTA Section
    readyToProtect: "à®¨à¯€à®™à¯à®•à®³à¯ à®¤à¦¾à®™à¯à®•à®³à¯ à®ªà®¾à®¤à¯à®•à®¾à®•à¯à®•à®¤à¯ à®¤à®¯à®¾à®°à®¾?",
    startAnalyzing: "à®‡à®ªà¯à®ªà¯‹à®¤à¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®¯ à®¤à¯Šà®Ÿà®™à¯à®•à¯à®™à¯à®•à®³à¯",
    noCardRequired: "à®•à¯à¦°à¯†à®Ÿà®¿à®Ÿà¯ à®•à®¾à®°à¯à®Ÿà¯ à®¤à¯‡à®µà¯ˆ à®‡à®²à¯à®²à¯ˆ",

    // Footer
    company: "à®¨à®¿à®±à¯à®µà®©à®®à¯",
    privacy: "à®¤à®©à®¿à®¯à¯à®°à®¿à®®à¯ˆ",
    terms: "à®¨à®¿à®ªà®¨à¯à®¤à®©à¯ˆà®•à®³à¯",
    contact: "à®¤à¯Šà®Ÿà®°à¯à®ªà¯",
    followUs: "à®Žà®™à¯à®•à®³à¯ˆà®ªà¯ à®ªà®¿à®©à¯ à®¤à¯Šà®Ÿà®°à®µà¯à®®à¯",

    // Auth
    email: "à®®à®¿à®©à¯à®©à®žà¯à®šà®²à¯",
    password: "à®•à®Ÿà®µà¯à®šà¯à®šà¯Šà®²à¯",
    forgotPassword: "à®•à®Ÿà®µà¯à®šà¯à®šà¯Šà®²à¯à®²à¯ˆ à®®à®±à®¨à¯à®¤à¯à®®à¯?",
    dontHaveAccount: "à®•à®£à®•à¯à®•à¯ à®‡à®²à¯à®²à¯ˆà®¯à®¾?",
    alreadyHaveAccount: "à®à®±à¯à®•à®©à®µà¯‡ à®•à®£à®•à¯à®•à¯ à®‰à®³à¯à®³à®¤à®¾?",

    // Analysis Page
    enterMessage: "à®šà®¨à¯à®¤à¯‡à®•à®¤à¯à®¤à®¿à®±à¯à®•à¯à®°à®¿à®¯ à®šà¯†à®¯à¯à®¤à®¿ à®‰à®³à¯à®³à®¿à®Ÿà®µà¯à®®à¯",
    selectLanguage: "à®®à¯Šà®´à®¿ à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯à®•à¯à®•à®µà¯à®®à¯",
    upload: "à®ªà®¤à®¿à®µà¯‡à®±à¯à®±à®®à¯",
    cancel: "à®°à®¤à¯à®¤à¯",
    save: "à®šà¯‡à®®à®¿à®•à¯à®•à®µà¯à®®à¯",
    share: "à®ªà®•à®¿à®°à¯",

    // Analyze Page
    pasteMessage: "à®šà®¨à¯à®¤à¯‡à®•à®¤à¯à®¤à®¿à®±à¯à®•à¯à®°à®¿à®¯ à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®’à®Ÿà¯à®Ÿà®µà¯à®®à¯",
    senderPhone: "à®…à®©à¯à®ªà¯à®ªà®¿à®¯à®µà®°à®¿à®©à¯ à®¤à¯Šà®²à¯ˆà®ªà¯‡à®šà®¿",
    messageDate: "à®šà¯†à®¯à¯à®¤à®¿ à®¤à¯‡à®¤à®¿",
    messageTime: "à®šà¯†à®¯à¯à®¤à®¿ à®¨à¯‡à®°à®®à¯",
    optional: "à®µà®¿à®°à¯à®®à¯à®ªà®¿à®©à®¾à®²à¯",
    uploadScreenshot: "à®¤à®¿à®°à¯ˆà®¯à®¿à®²à¯ à®ªà®Ÿà®®à¯ à®ªà®¤à®¿à®µà¯‡à®±à¯à®±à®µà¯à®®à¯",
    dragDropFile: "à®•à¯‹à®ªà¯à®ªà¯ˆ à®‡à®™à¯à®•à¯‡ à®‡à®´à¯à®•à¯à®•à®µà¯à®®à¯ à®…à®²à¯à®²à®¤à¯ à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯à®•à¯à®• à®•à®¿à®³à®¿à®•à¯ à®šà¯†à®¯à¯à®¯à®µà¯à®®à¯",
    supportedFormats: "à®†à®¤à®°à®µà¯: PNG, JPG (à®…à®¤à®¿à®•à®ªà®Ÿà¯à®šà®®à¯ 5MB)",
    analyzeNow: "à®‡à®ªà¯à®ªà¯‹à®¤à¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®¨à¯à®¤à¯ à®šà¯†à®¯à¯à®¯à®µà¯à®®à¯",
    analyzing: "à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®¨à¯à®¤à¯ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®•à®¿à®±à®¤à¯...",

    // About Page
    whyWeBuiltThis: "à®¨à®¾à®®à¯ à®‡à®¤à¯ˆ à®à®©à¯ à®‰à®°à¯à®µà®¾à®•à¯à®•à®¿à®©à¯‹à®®à¯",
    aboutIntro: "à®’à®µà¯à®µà¯Šà®°à¯ à®µà®¾à®°à®®à¯à®®à¯, à®†à®¯à®¿à®°à®•à¯à®•à®£à®•à¯à®•à®¾à®© à®•à®¿à®°à®¾à®®à®ªà¯à®ªà¯à®± à®‡à®¨à¯à®¤à®¿à®¯à®°à¯à®•à®³à¯ à®‰à®£à¯à®®à¯ˆà®¯à¯†à®©à¯à®±à¯ à®¤à¯‹à®©à¯à®±à¯à®®à¯ à®†à®©à®¾à®²à¯ à®…à®ªà¯à®ªà®Ÿà®¿ à®‡à®²à¯à®²à®¾à®¤ SMS à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ˆà®ªà¯ à®ªà¯†à®±à¯à®•à®¿à®±à®¾à®°à¯à®•à®³à¯.",
    aboutProblem: "à®’à®°à¯ à®šà¯†à®¯à¯à®¤à®¿ à®…à®µà®°à¯à®•à®³à®¿à®©à¯ à®†à®¤à®¾à®°à¯ˆ à®®à¯à®Ÿà®¿à®¨à¯à®¤à¯à®µà®¿à®Ÿà¯à®Ÿà®¤à¯ à®Žà®©à¯à®±à¯ à®•à¯‚à®±à¯à®•à®¿à®±à®¤à¯. à®’à®°à¯ à®ªà¯‹à®²à®¿ à®µà®™à¯à®•à®¿ à®Žà®šà¯à®šà®°à®¿à®•à¯à®•à¯ˆ à®…à®µà®°à¯à®•à®³à®¿à®©à¯ à®•à®£à®•à¯à®•à¯ à®®à¯‚à®Ÿà®ªà¯à®ªà®Ÿà¯à®®à¯ à®Žà®©à¯à®±à¯ à®šà¯Šà®²à¯à®•à®¿à®±à®¤à¯. à®…à®µà®°à¯à®•à®³à¯ à®’à®°à¯à®ªà¯‹à®¤à¯à®®à¯ à®¨à¯à®´à¯ˆà®¯à®¾à®¤ à®šà®Ÿà¯à®Ÿà®ªà¯‚à®œà¯ˆ. à®’à®°à¯ à®…à®°à®šà¯ à®¤à®¿à®Ÿà¯à®Ÿà®®à¯ à®‡à®²à¯à®²à¯ˆ.",
    aboutProblem2: "à®‡à®¨à¯à®¤ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ à®ªà¯€à®¤à®¿à®¯à¯ˆ à®‰à®°à¯à®µà®¾à®•à¯à®• à®µà®Ÿà®¿à®µà®®à¯ˆà®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®©. à®…à®µà¯ˆ à®…à®¤à®¿à®•à®¾à®°à®¤à¯à®¤à¯ˆ à®’à®²à®¿ à®®à¯Šà®´à®¿à®¯à¯ˆà®ªà¯ à®ªà®¯à®©à¯à®ªà®Ÿà¯à®¤à¯à®¤à¯à®•à®¿à®©à¯à®±à®©. à®…à®µà¯ˆ à®µà®¿à®³à¯ˆà®µà¯à®•à®³à¯ˆ à®®à®¿à®°à®Ÿà¯à®Ÿà¯à®•à®¿à®©à¯à®±à®©. à®…à®µà¯ˆ à®‰à®Ÿà®©à®Ÿà®¿ à®¨à®Ÿà®µà®Ÿà®¿à®•à¯à®•à¯ˆ à®•à¯‹à®°à¯à®•à®¿à®©à¯à®±.",
    aboutProblem3: "à®®à®±à¯à®±à¯à®®à¯ à®…à®µà¯ˆ à®µà¯‡à®²à¯ˆ à®šà¯†à®¯à¯à®•à®¿à®±à®¤à¯.",
    aboutStats: "2023à®²à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯‡, à®‡à®¨à¯à®¤à®¿à®¯à®°à¯à®•à®³à¯ SMS à®®à¯‹à®šà®£à¯ˆà®¯à®¿à®²à®¿à®°à¯à®¨à¯à®¤à¯ â‚¹1,200 à®•à¯‹à®Ÿà¯à®Ÿà®¿à®•à¯à®•à¯à¦“ à®…à®¤à®¿à®•à®®à®¾à®© à®‡à®´à®¨à¯à®¤à®¾à®°à¯à®•à®³à¯.",
    aboutMission: "SentinelAI à® à®‰à®°à¯à®µà®¾à®•à¯à®•à®¿à®¯ à®•à®¾à®°à®£à®®à¯ à®Žà®©à¯à®©à®µà¯†à®©à¯à®±à®¾à®²à¯ à®¯à®¾à®°à¯à®®à¯ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà¯à®•à¯à®•à¯ à®¤à®•à¯à®¤à®¿ à®‰à®Ÿà¯ˆà®¯à®µà®°à¯, à®…à®µà®°à¯ à®Žà®™à¯à®•à¯ à®µà®¾à®´à¯à®•à®¿à®±à®¾à®°à¯ à®…à®²à¯à®²à®¤à¯ à®Žà®¨à¯à®¤ à®®à¯Šà®´à®¿ à®ªà¯‡à®šà®¿à®©à®¾à®²à¯à®®à¯.",
    problemIsReal: "à®šà®¿à®•à¯à®•à®²à¯ à®‰à®£à¯à®®à¯ˆà®¯à®¾à®©à®¤à¯",
    realityOfFraud: "à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà®¿à®²à¯ SMS à®®à¯‹à®šà®£à¯ˆà®¯à®¿à®©à¯ à®¯à®¤à®¾à®°à¯à®¤à¯à®¤à®®à¯",
    lostToFraud: "2023 à®‡à®²à¯ à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà®¿à®²à¯ à®®à¯‹à®šà®£à¯ˆà®¯à¯ˆà®¤à¯ à®¤à¯Šà®Ÿà®°à¯à®¨à¯à®¤à¯ à®‡à®´à®¨à¯à®¤à®¤à¯",
    cyberCrimeReports: "à®šà¯ˆà®ªà®°à¯ à®•à¯à®±à¯à®±à®®à¯ à®…à®±à®¿à®•à¯à®•à¯ˆà®•à®³à¯",
    victimLiveRural: "à®•à®¿à®°à®¾à®®à®ªà¯à®ªà¯à®± à®ªà®•à¯à®¤à®¿à®•à®³à®¿à®²à¯ à®µà®¾à®´à¯à®ªà®µà®°à¯à®•à®³à¯ à®ªà®¾à®¤à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà®µà®°à¯",
    yearOverYearIncrease: "smishing à¦ à¦¬à¦›à¦° à®¤à®¿à®°à¯à®®à¯à®ªà®¿ à®µà®°à¯à®µà®¤à®±à¯à®•à¯ à¦¬à¦›à¦° à®‰à®¯à®°à¯à®µà¯",
    averageVictimLoss: "à®šà®°à®¾à®šà®°à®¿ à®ªà®¾à®¤à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿ à®‡à®´à®ªà¯à®ªà¯ (à®…à®Ÿà®¿à®•à¯à®•à®Ÿà®¿ à®µà®¾à®´à¯à®¨à®¾à®³à¯ à®šà¯‡à®®à®¿à®ªà¯à®ªà¯)",
    reportedToAuthorities: "à®®à¯€à®©à¯ 23% à®®à¯‹à®šà®£à¯ˆà®•à®³à¯ à®…à®¤à®¿à®•à®¾à®°à®¿à®•à®³à¯à®•à¯à®•à¯ à®…à®±à®¿à®•à¯à®•à¯ˆ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®©",
    cannotIdentifyScams: "78% à®•à®¿à®°à®¾à®®à®ªà¯à®ªà¯à®± à®‡à®¨à¯à®¤à®¿à®¯à®°à¯à®•à®³à¯ à®ªà¯Šà®¤à¯à®µà®¾à®© à®®à¯‹à®šà®£à¯ˆ à®µà®Ÿà®¿à®µà®™à¯à®•à®³à¯ˆà®•à¯ à®•à®£à¯à®Ÿà®±à®¿à®¯ à®®à¯à®Ÿà®¿à®¯à®¾à®¤à¯",
    dontSeekHelp: "43% à®ªà®¾à®¤à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà®µà®°à¯à®•à®³à¯ à®µà¯†à®Ÿà¯à®•à®¤à¯à®¤à®¿à®©à¯ à®•à®¾à®°à®£à®¤à¯à®¤à®¿à®±à¯à®•à¯ à®‰à®¤à®µà®¿ à®¤à¯‡à®Ÿà®µà®¿à®²à¯à®²à¯ˆ",
    bankingScramsAccount: "à®µà®™à¯à®•à®¿ à®®à¯‹à®šà®£à¯ˆà®•à®³à¯ à®…à®©à¯ˆà®¤à¯à®¤à¯ SMS à®®à¯‹à®šà®£à¯ˆà®¯à®¾à®© 43% à®•à®£à®•à¯à®•à¯",
    moreAlarmingFacts: "à®®à¯‡à®²à¯à®®à¯ à®•à®µà®²à¯ˆ à®šà¯†à®¯à¯à®¯à¯à®®à¯ à®‰à®£à¯à®®à¯ˆà®•à®³à¯",
    whyRuralTargeted: "à®à®©à¯ à®•à®¿à®°à®¾à®®à®ªà¯à®ªà¯à®± à®ªà®•à¯à®¤à®¿à®•à®³à¯ à®‡à®²à®•à¯à®•à¯",
    limitedDigitalLiteracy: "à®µà®°à®®à¯à®ªà®¿à®±à¯à®•à¯ à®‰à®Ÿà¯à®ªà®Ÿà¯à®Ÿ à¦¡à¦¿à¦œà®¿à¦Ÿà®²à¯ à®šà®¾à¦•à¯à¦·à®°à®¤à¯à®¤ à®®à®±à¯à®±à¯à®®à¯ à®®à¯‹à®šà®£à¯ˆ à®µà®¿à®´à®¿à®ªà¯à®ªà¯à®£à®°à¯à®µà¯",
    languageBarriers: "à®®à¯Šà®´à®¿ à®¤à®Ÿà¯ˆà®•à®³à¯ (à®®à¯‹à®šà®£à¯ˆ à®Žà®šà¯à®šà®°à®¿à®•à¯à®•à¯ˆà®•à®³à¯ à®†à®™à¯à®•à®¿à®²à®¤à¯à®¤à®¿à®²à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯)",
    trustInMessages: "à®…à®¤à®¿à®•à®¾à®°à®¤à¯à®¤à¯ˆ à®¤à¯†à®°à®¿à®± à®šà¯†à®¯à¯à®¤à®¿à®•à®³à®¿à®²à¯ à®¨à®®à¯à®ªà®¿à®•à¯à®•à¯ˆ",
    lessAccessToEducation: "à®®à¯‹à®šà®£à¯ˆ à®•à®²à¯à®µà®¿ à®µà®³à®™à¯à®•à®³à¯à®•à¯à®•à¯ à®•à¯à®±à¯ˆà®¨à¯à®¤ à®…",
    delayedReportingAllows: "à®¤à®¾à®®à®¤à®®à®¾à®© à®…à®±à®¿à®•à¯à®•à¯ˆ à®®à¯‹à®šà®£à¯ˆà®•à¯à®•à®¾à®°à®°à¯à®•à®³à¯ˆ à®¨à¯€à®£à¯à®Ÿ à®¨à¯‡à®°à®®à¯ à®šà¯†à®¯à®²à¯à®ªà®Ÿ à®…à®©à¯à®®à®¤à®¿à®•à¯à®•à®¿à®±à®¤à¯",
    ourSolution: "à®Žà®™à¯à®•à®³à¯ à®¤à¯€à®°à¯à®µà¯",
    simpleAccessibleProtection: "à®…à®©à¯ˆà®µà®°à¯à®•à¯à®•à¯à®®à¯ à®Žà®³à®¿à®¯, à®‡à®²à®µà®š à®®à®±à¯à®±à¯à®®à¯ à®…à®£à¯à®•à®•à¯à®•à¯‚à®Ÿà®¿à®¯ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà¯",
    threeSecondAnalysis: "3-à®µà®¿à®¨à®¾à®Ÿà®¿ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯",
    freeAiAnalyzes: "à®‡à®¯à®¨à¯à®¤à®¿à®° à®¨à¯à®£à¯à®£à®±à®¿à®µà¯ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ˆ à®‰à®Ÿà®©à®Ÿà®¿à®¯à®¾à®• à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®•à®¿à®±à®¤à¯",
    worksInYourLanguage: "à®‰à®™à¯à®•à®³à¯ à®®à¯Šà®´à®¿à®¯à®¿à®²à¯ à®‡à®¯à®™à¯à®•à¯à®•à®¿à®±à®¤à¯ (à®®à¯‡à®²à¯à®®à¯ à®µà®°à¯à®•à®¿à®±à®¤à¯)",
    builtForEveryone: "à®…à®©à¯ˆà®µà®°à¯à®•à¯à®•à¯à®®à¯ à®•à®Ÿà¯à®Ÿà®ªà¯à®ªà®Ÿà¯à®Ÿà¯à®³à¯à®³à®¤à¯",
    noTechNeeded: "à®¤à¯Šà®´à®¿à®²à¯à®¨à¯à®Ÿà¯à®ª à®…à®±à®¿à®µà¯ à®¤à¯‡à®µà¯ˆà®ªà¯à®ªà®Ÿà®µà®¿à®²à¯à®²à¯ˆ",
    privacyFirst: "à®®à¯à®¤à®²à¯ à®¤à®©à®¿à®¯à¯à®°à®¿à®®à¯ˆ",
    messagesEncrypted: "30 à®¨à®¾à®Ÿà¯à®•à®³à¯à®•à¯à®•à¯à®ªà¯ à®ªà®¿à®±à®•à¯ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ à®•à¯à®±à®¿à®¯à®¾à®•à¯à®•à®®à¯ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿà¯ à®¨à¯€à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿà®©",
    indiaSpecific: "à®‡à®¨à¯à®¤à®¿à®¯à®¾-à®•à¯à®±à®¿à®ªà¯à®ªà®¿à®Ÿ",
    trainedOnIndian: "à®‡à®¨à¯à®¤à®¿à®¯ à®®à¯‹à®šà®£à¯ˆ à®µà®Ÿà®¿à®µà®™à¯à®•à®³à®¿à®²à¯ à®ªà®¯à®¿à®±à¯à®šà®¿",
    freeForever: "à®Žà®©à¯à®±à¯à®®à¯ à®‡à®²à®µà®šà®®à¯",
    noAdsTracking: "à®µà®¿à®³à®®à¯à®ªà®°à®™à¯à®•à®³à¯, à®•à®£à¯à®•à®¾à®£à®¿à®ªà¯à®ªà¯, à®•à®£à®•à¯à®•à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿ à®šà¯†à®²à®µà¯à®•à®³à¯ à®‡à®²à¯à®²à¯ˆ",
    fourSimpleSteps: "à®¨à¯€à®™à¯à®•à®³à¯ˆ à®ªà®¾à®¤à¯à®•à®¾à®•à¯à®• à®¨à®¾à®©à¯à®•à¯ à®Žà®³à®¿à®¯ à®ªà®Ÿà®¿à®•à®³à¯",
    copyTheSuspicious: "à®šà®¨à¯à®¤à¯‡à®•à®¤à¯à®¤à®¿à®±à¯à®•à¯à®°à®¿à®¯ à®šà¯†à®¯à¯à®¤à®¿à®•à¯à®•à®³à¯ˆ à®¨àª•à®²à¯ à®šà¯†à®¯à¯à®¯à®µà¯à®®à¯",
    aiAnalysis: "AI à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯",
    weCheck47: "à®¨à®¾à®™à¯à®•à®³à¯ 47 à®¤à¯†à®°à®¿à®¨à¯à®¤ à®®à¯‹à®šà®£à¯ˆ à®µà®Ÿà®¿à®µà®™à¯à®•à®³à¯ˆ à®šà®°à®¿à®ªà®¾à®°à¯à®•à¯à®•à®¿à®±à¯‹à®®à¯",
    getVerdict: "à®†à®£à¯ˆ à®ªà¯†à®±à¯à®™à¯à®•à®³à¯",
    clearAnswer: "à®¤à¯†à®³à®¿à®µà®¾à®© à®ªà®¤à®¿à®²à¯: à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà¯, à®šà®¨à¯à®¤à¯‡à®•à®¤à¯à®¤à®¿à®±à¯à®•à¯à®°à®¿à®¯, à®…à®²à¯à®²à®¤à¯ à®®à¯‹à®šà®£à¯ˆ",
    takeAction: "à®¨à®Ÿà®µà®Ÿà®¿à®•à¯à®•à¯ˆ à®Žà®Ÿà¯à®™à¯à®•à®³à¯",
    simpleStepsInLanguage: "à®‰à®™à¯à®•à®³à¯ à®®à¯Šà®´à®¿à®¯à®¿à®²à¯ à®Žà®³à®¿à®¯ à®ªà®Ÿà®¿à®•à®³à¯",

    // Help Page
    helpCenter: "à®‰à®¤à®µà®¿ à®®à¯ˆà®¯à®®à¯",
    findAnswers: "SentinelAIà®•à¯à®•à¯ à®ªà¯Šà®¤à¯à®µà®¾à®© à®•à¯‡à®³à¯à®µà®¿à®•à®³à¯à®•à¯à®•à®¾à®© à®ªà®¤à®¿à®²à¯ˆà®•à¯ à®•à®£à¯à®Ÿà¯à®ªà®¿à®Ÿà®¿à®•à¯à®•à®µà¯à®®à¯",
    general: "à®ªà¯Šà®¤à¯à®µà®¾à®©",
    howDoesWork: "SentinelAI à®Žà®ªà¯à®ªà®Ÿà®¿ à®µà¯‡à®²à¯ˆ à®šà¯†à®¯à¯à®•à®¿à®±à®¤à¯?",
    pasteYourMessage: "à®‰à®™à¯à®•à®³à¯ à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®’à®Ÿà¯à®Ÿà®µà¯à®®à¯, à®Žà®™à¯à®•à®³à¯ AI 3 à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯à®•à¯à®•à¯à®³à¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®•à®¿à®±à®¤à¯, à®‰à®™à¯à®•à®³à¯ à®®à¯Šà®´à®¿à®¯à®¿à®²à¯ à®¤à¯†à®³à®¿à®µà®¾à®© à®ªà®¤à®¿à®²à¯ˆ à®ªà¯†à®±à¯à®™à¯à®•à®³à¯.",
    isItReallyFree: "à®‡à®¤à¯ à®¨à®¿à®œà®®à®¾à®• à®‡à®²à®µà®šà®®à®¾?",
    yesCompletelyfree: "à®†à®®à¯. à®®à¯à®´à¯à®µà®¤à¯à®®à®¾à®• à®‡à®²à®µà®šà®®à¯. à®‡à®²à¯à®²à¯ˆ à®•à®¿à®°à¯†à®Ÿà®¿à®Ÿà¯ à®•à®¾à®°à¯à®Ÿà¯, à®®à®±à¯ˆà®¨à¯à®¤ à®•à®Ÿà¯à®Ÿà®£à®™à¯à®•à®³à¯ à®‡à®²à¯à®²à¯ˆ, à®Žà®©à¯à®±à¯à®®à¯. à®¨à®©à¯à®•à¯Šà®Ÿà¯ˆà®•à®³à¯ à®®à®±à¯à®±à¯à®®à¯ à®¨à®©à¯à®•à¯Šà®Ÿà¯ˆà®•à®³à®¾à®²à¯ à®¨à®¿à®¤à®¿à®¯à¯à®Ÿà®©à¯.",
    whichLanguagesSupported: "à®Žà®¨à¯à®¤ à®®à¯Šà®´à®¿à®•à®³à¯ à®†à®¤à®°à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®•à®¿à®©à¯à®±à®©?",
    hindiEnglishTelugu: "à®¤à®®à®¿à®´à¯, à®¹à®¿à®¨à¯à®¤à®¿, à®®à®±à¯à®±à¯à®®à¯ à®¤à¯†à®²à¯à®™à¯à®•à¯. à®®à¯‡à®²à¯à®®à¯ à®‡à®¨à¯à®¤à®¿à®¯ à®®à¯Šà®´à®¿à®•à®³à¯ à®µà®°à¯à®•à®¿à®±à®¤à¯.",
    doINeedAccount: "à®¨à®¾à®©à¯ à®’à®°à¯ à®•à®£à®•à¯à®•à¯ à®‰à®°à¯à®µà®¾à®•à¯à®• à®µà¯‡à®£à¯à®Ÿà¯à®®à®¾?",
    noForTrying: "à®†à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®µà®¤à®±à¯à®•à¯ à®‡à®²à¯à®²à¯ˆ. à®‰à®™à¯à®•à®³à¯ à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®µà®°à®²à®¾à®±à¯ˆ à®šà¯‡à®®à®¿à®•à¯à®• à®®à®±à¯à®±à¯à®®à¯ à®®à¯à®´à¯ à®µà®šà®¤à®¿à®•à¯à®•à¯ à®…à®£à¯à®• à®†à®®à¯.",
    privacySecurity: "à®¤à®©à®¿à®¯à¯à®°à®¿à®®à¯ˆ à®®à®±à¯à®±à¯à®®à¯ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà¯",
    isMyDataSafe: "à®Žà®©à®¤à¯ à®¤à®¿ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà®¾à®• à®‰à®³à¯à®³à®¤à®¾?",
    yesWeEncrypt: "à®†à®®à¯. à®¨à®¾à®®à¯ à®…à®©à¯ˆà®¤à¯à®¤à¯ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ˆ à®•à¯à®±à®¿à®¯à®¾à®•à¯à®•à®®à¯ à®šà¯†à®¯à¯à®•à®¿à®±à¯‹à®®à¯, 30 à®¨à®¾à®Ÿà¯à®•à®³à¯à®•à¯à®•à¯à®ªà¯ à®ªà®¿à®±à®•à¯ à®¤à®¾à®©à®¾à®• à®¨à¯€à®•à¯à®•à®¿à®±à¯‹à®®à¯, à®¯à®¾à®°à®¿à®Ÿà®®à¯ à®ªà®•à®¿à®°à®µà¯à®®à¯.",
    canYouRead: "à®¨à¯€à®™à¯à®•à®³à¯ à®Žà®©à¯ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ˆà®ªà¯ à®ªà®Ÿà®¿à®•à¯à®•à®²à®¾à®®à¯?",
    aiAnalyzesAuto: "à®Žà®™à¯à®•à®³à¯ AI à®¤à®¾à®©à®¾à®• à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯à®•à®¿à®±à®¤à¯, à®†à®©à®¾à®²à¯ à®®à®©à®¿à®¤à®©à¯ à®‰à®™à¯à®•à®³à¯ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯ˆà®ªà¯ à®ªà®¾à®ªà¯à®ªà®¤à®¿à®²à¯à®²à¯ˆ.",
    whatDoYouDo: "à®ªà®¤à®¿à®µà¯‡à®±à¯à®±à®®à¯ à®¤à®µà®±à¯ˆ à®¤à®¿à®°à¯ˆà®•à®³à¯à®Ÿà®©à¯ à®¨à¯€à®™à¯à®•à®³à¯ à®Žà®©à¯à®© à®šà¯†à®¯à¯à®•à®¿à®±à¯€à®°à¯à®•à®³à¯?",
    sameAsText: "à®‰à®°à¯ˆà®µà®Ÿà®¿à®µà®®à¯ - à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®šà¯†à®¯à¯, à®•à¯à®±à®¿à®¯à®¾à®•à¯à®•à®®à¯ à®šà¯†à®¯à¯, à®®à®±à¯à®±à¯à®®à¯ 30 à®¨à®¾à®Ÿà¯à®•à®³à¯à®•à¯à®•à¯à®ªà¯ à®ªà®¿à®±à®•à¯ à®¤à®¾à®©à®¾à®• à®¨à¯€à®•à¯à®•. à®®à®©à®¿à®¤à®©à¯ à®…à®£à¯à®• à®‡à®²à¯à®²à¯ˆ.",
    usingSentinelAI: "SentinelAI à®à®ªà¯ à®ªà®¯à®©à¯à®ªà®Ÿà¯à®¤à¯à®¤à¯à®•à®¿à®±à®¤à¯",
    howAccurate: "à®•à®£à¯à®Ÿà®±à®¿à®¤à®²à¯ à®Žà®µà¯à®µà®³à®µà¯ à®¤à¯à®²à¯à®²à®¿à®¯à®®à®¾à®• à®‰à®³à¯à®³à®¤à¯?",
    continuouslyImproving: "à®¨à®¾à®®à¯ à®¤à¯Šà®Ÿà®°à¯à®¨à¯à®¤à¯ à®®à¯‡à®®à¯à®ªà¯Šà®°à¯à®³à¯ à®šà¯†à®¯à¯à®•à®¿à®±à¯‹à®®à¯. à®Žà®™à¯à®•à®³à¯ AI à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà¯à®•à¯à®•à¯ à®•à¯à®±à®¿à®ªà¯à®ªà®¿à®±à¯à®•à¯à®°à®¿à®¯ à®†à®¯à®¿à®°à®•à¯à®•à®£à®•à¯à®•à®¾à®© à®¤à¯†à®°à®¿à®¨à¯à®¤ à®®à¯‹à®šà®£à¯ˆ à®µà®Ÿà®¿à®µà®™à¯à®•à®³à®¿à®²à¯ à®ªà®¯à®¿à®±à¯à®šà®¿.",
    whatIfSays: "à®‡à®¤à¯ à®Žà®©à¯ à®šà¯†à®¯à¯à®¤à®¿ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà¯à®•à¯à®•à¯à®šà¯ à®šà¯Šà®²à¯à®²à®ªà¯à®ªà®Ÿà¯à®Ÿà®¾à®²à¯ à®†à®©à®¾à®²à¯ à®¨à®¾à®©à¯ à®‡à®©à¯à®©à¯à®®à¯ à®¨à®¿à®šà¯à®šà®¯à®®à®±à¯à®±à®µà®©à®¾à®¯à¯?",
    alwaysTrustInstinct: "à®Žà®ªà¯à®ªà¯‹à®¤à¯à®®à¯ à®‰à®™à¯à®•à®³à¯ à®‰à®³à¯à®³à¯à®£à®°à¯à®µà¯ˆ à®¨à®®à¯à®ªà¯à®™à¯à®•à®³à¯. à®à®¤à®¾à®µà®¤à¯ à®¤à®µà®±à®¾à®• à®‰à®£à®°à¯à®¨à¯à®¤à®¾à®²à¯, à®‡à®£à¯ˆà®ªà¯à®ªà¯à®•à®³à¯ˆà®•à¯ à®•à®¿à®³à®¿à®•à¯ à®šà¯†à®¯à¯à®¯à®µà¯‡à®£à¯à®Ÿà®¾à®®à¯ à®…à®²à¯à®²à®¤à¯ à®¤à®©à®¿à®ªà¯à®ªà®Ÿà¯à´Ÿ à®¤à®•à®µà®²à¯à®•à®³à¯ˆà®ªà¯ à®ªà®•à®¿à®°à®µà¯‡à®£à¯à®Ÿà®¾à®®à¯.",
    canIReport: "à®¨à®¾à®©à¯ à®¤à®µà®±à®¾à®© à®µà®¿à®³à¯ˆà®µà¯à®•à®³à¯ˆ à®…à®±à®¿à®•à¯à®•à¯ˆ à®šà¯†à®¯à¯à®¯ à®®à¯à®Ÿà®¿à®¯à¯à®®à®¾?",
    yesPleaseUse: "à®†à®®à¯, à®¤à®¯à®µà¯à®šà¯†à®¯à¯à®¤à¯. à®ªà®•à¯à®ªà¯à®ªà®¾à®¯à¯à®µà¯ à®…à®±à®¿à®•à¯à®•à¯ˆà®¯à®¿à®²à¯ à®•à¯‚à®Ÿ à®ªà®•à¯à®· à®ªà¯Šà®¤à¯à®¤à®¾à®©à¯ à®ªà®¯à®©à¯à®ªà®Ÿà¯à®¤à¯à®¤à®¿ à®¨à®®à¯à®®à¯ˆ à®®à¯‡à®®à¯à®ªà¯Šà®°à¯à®³à¯ à®šà¯†à®¯à¯à®¯ à®‰à®¤à®µ.",
    whatIfClickedLink: "à®¨à®¾à®©à¯ à®à®±à¯à®•à®©à®µà¯‡ à®’à®°à¯ à®®à¯‹à®šà®£à¯ˆ à®‡à®£à¯ˆà®ªà¯à®ªà¯ˆà®•à¯ à®•à®¿à®³à®¿à®•à¯ à®šà¯†à®¯à¯à®¤à®¾à®²à¯ à®¨à®¾à®©à¯ à®Žà®©à¯à®© à®šà¯†à®¯à¯à®¯ à®µà¯‡à®£à¯à®Ÿà¯à®®à¯?",
    actImmediately: "à®‰à®Ÿà®©à¯‡ à®¨à®Ÿà®µà®Ÿà®¿à®•à¯à®•à¯ˆ à®Žà®Ÿà¯à®™à¯à®•à®³à¯: (1) à®‡à®©à¯à®Ÿà®°à¯à®¨à¯†à®Ÿà¯à®Ÿà®¿à®²à®¿à®°à¯à®¨à¯à®¤à¯ à®µà¯†à®³à®¿à®¯à¯‡à®±à®¿, (2) à®¤à®¿à®±à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿ à®¤à®³à®¤à¯à®¤à®¿à®±à¯à®•à¯ à®¤à®•à®µà®²à¯ à®‰à®³à¯à®³à®¿à®Ÿà®µà¯‡à®£à¯à®Ÿà®¾à®®à¯, (3) à®‰à®™à¯à®•à®³à¯ à®ªà®™à¯à®•à¯ à¦œà¦¾à¦²à®®à¯ˆ à®‰à®¤à®µà®¿ à®µà®°à®¿à®•à¯à®•à¯ à®…à®´à¯ˆà®•à¯à®•à®µà¯à®®à¯, (4) à®…à®©à¯ˆà®¤à¯à®¤à¯ à®•à®Ÿà®µà¯à®šà¯à®šà¯Šà®²à¯à®²à¯ˆ à®®à®¾à®±à¯à®±à®µà¯à®®à¯, (5) 48 à®®à®£à®¿ à®¨à¯‡à®°à®®à¯ à®¨à®¾à®£à®¯à®™à¯à®•à®³à¯ˆà®•à¯ à®•à®£à¯à®•à®¾à®£à®¿à®•à¯à®•à®µà¯à®®à¯, (6) à®šà¯ˆà®ªà®°à¯ à®•à¯à®±à¯à®±à®™à¯à®•à®³à¯à®•à¯à®•à¯ à®…à®±à®¿à®•à¯à®•à¯ˆ à®•à¯Šà®Ÿà¯à®•à¯à®•à®µà¯à®®à¯: 1930",
    canIUseWhatsapp: "à®¨à®¾à®©à¯ à®‡à®¤à¯ˆ WhatsApp à®…à®²à¯à®²à®¤à¯ à®ªà®¿à®± à®†à®ªà¯à®ª à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯à®•à¯à®•à¯ à®ªà®¯à®©à¯à®ªà®Ÿà¯à®¤à¯à®¤à®²à®¾à®®à¯?",
    yesPasteAnyText: "à®†à®®à¯, à®Žà®¨à¯à®¤ à®¤à®³à®¤à¯à®¤à®¿à®²à®¿à®°à¯à®¨à¯à®¤à¯à®®à¯ à®Žà®¨à¯à®¤ à®µà®°à¯ˆ à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®’à®Ÿà¯à®Ÿà®µà¯à®®à¯ - SMS, WhatsApp, à®¤à®•à®µà®²à¯, Facebook, à®®à®¿à®©à¯à®©à®žà¯à®šà®²à¯.",
    stillHaveQuestions: "à®‡à®©à¯à®©à¯à®®à¯ à®•à¯‡à®³à¯à®µà®¿ à®‰à®³à¯à®³à®¤à®¾?",
    emailUs: "à®Žà®™à¯à®•à®³à¯ˆ à®®à®¿à®©à¯à®©à®žà¯à®šà®²à¯ à®šà¯†à®¯à¯à®¯à®µà¯à®®à¯: support@sentinelai.com",
    responseTime: "à®ªà®¤à®¿à®²à®¿à®©à¯ à®šà®®à®¯à®®à¯: à®µà®´à®•à¯à®•à®®à®¾à®• 24 à®®à¯à®©à¯ à®‰à®³à¯à®³à¯‡",

    // Contact Page
    getTouchTitle: "à®¤à¯Šà®Ÿà®°à¯à®ªà¯ˆà®¤à¯ à®¤à¯Šà®Ÿà®°à¯à®ªà¯ à®•à¯Šà®³à¯à®³à®µà¯à®®à¯",
    haveQuestions: "à®•à¯‡à®³à¯à®µà®¿ à®‰à®³à¯à®³à®¤à®¾? à®¨à®¾à®™à¯à®•à®³à¯ à®‰à®™à¯à®•à®³à¯à®•à¯à®•à¯ à®‰à®¤à®µ à®‡à®™à¯à®•à¯‡ à®‰à®³à¯à®³à¯‹à®®à¯. à®Žà®™à¯à®•à®³à¯à®•à¯à®•à¯ à®’à®°à¯ à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®ªà¦¾à®Ÿà®µà¯à®®à¯ à®®à®±à¯à®±à¯à®®à¯ à®¨à®¾à®™à¯à®•à®³à¯ 24 à®®à®°à®£à®¤à¯à®¤à®¿à®±à¯à®•à¯ à®ªà®¤à®¿à®²à®³à®¿à®ªà¯à®ªà¯‹à®®à¯.",
    fullName: "à®®à¯à®´à¯ à®ªà¯†à®¯à®°à¯ *",
    yourName: "à®‰à®™à¯à®•à®³à¯ à®ªà¯†à®¯à®°à¯",
    emailAddress: "à®®à®¿à®©à¯à®©à®žà¯à®šà®²à¯ à®®à¯à®•à®µà®°à®¿ *",
    youAtExample: "you@example.com",
    subject: "à®ªà¯Šà®°à¯à®³à¯",
    selectSubject: "à®’à®°à¯ à®ªà¯Šà®°à¯à®³à¯ˆà®¤à¯ à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯à®•à¯à®•à®µà¯à®®à¯",
    generalInquiry: "à®ªà¯Šà®¤à¯à®µà®¾à®© à®•à¯‡à®³à¯à®µà®¿",
    technicalSupport: "à®¤à¯Šà®´à®¿à®²à¯à®¨à¯à®Ÿà¯à®ª à®‰à®¤à®µà®¿",
    reportFalsePositive: "à®¤à®µà®±à®¾à®© à®¨à¯‡à®°à¯à®®à®±à¯ˆ à®…à®±à®¿à®•à¯à®•à¯ˆ",
    reportScam: "à®®à¯‹à®šà®£à¯ˆ à®…à®±à®¿à®•à¯à®•à¯ˆ",
    partnershipOpportunity: "à®ªà®™à¯à®•à¯à®¤à®¾à®°à®¿ à®µà®¾à®¯à¯à®ªà¯à®ªà¯",
    pressMedia: "à®ªà®¤à¯à®¤à®¿à®°à®¿à®•à¯ˆ/à®®à¯€à®Ÿà®¿à®¯à®¾ à®•à¯‡à®³",
    other: "à®ªà®¿à®±",
    messageLabel: "à®šà¯†à®¯à¯à®¤à®¿ *",
    howCanWeHelp: "à®¨à®¾à®™à¯à®•à®³à¯ à®‰à®™à¯à®•à®³à¯à®•à¯à®•à¯ à®Žà®ªà¯à®ªà®Ÿà®¿ à®‰à®¤à®µà®²à®¾à®®à¯?",
    sendMessage: "à®šà¯†à®¯à¯à®¤à®¿à®¯à¯ˆ à®…à®©à¯à®ªà¯à®ªà®µà¯à®®à¯",
    responseTimeContact: "à®µà®´à®•à¯à®•à®®à®¾à®• 24 à®®à®°à®£à®¤à¯à®¤à®¿à®±à¯à®•à¯ à®‰à®³à¯à®³à¯‡",
    mondayFriday: "à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ-à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ, 9 AM - 6 PM IST",
    alreadyBeenScammed: "à®à®±à¯à®•à®©à®µà¯‡ à®®à¯‹à®šà®£à¯ˆà®¯à®¾à®• à®®à¯‹à®šà®£à¯ˆ?",
    dontWaitReport: "à®•à¯Šà®Ÿà¯à®•à¯à®• à®µà¯‡à®£à¯à®Ÿà®¾à®®à¯ - à®‰à®Ÿà®©à¯‡ à®…à®¤à¤¿à¤•à®¾à¤°à¥€ à®•à¯‚à®±à®µà¯à®®à¯:",
    cyberCrimeHelpline: "à®šà¯ˆà®ªà®°à¯ à®•à¯à®±à¯à®±à®®à¯ à®‰à®¤à®µà®¿ à®µà®°à®¿: 1930",
    available24By7: "24/7 à®•à®¿à®Ÿà¯ˆà®•à¯à®•à®¿à®±à®¤à¯ â€¢ à®‰à®Ÿà®©à¯‡ à®‰à®™à¯à®•à®³à¯ à®ªà®™à¯à®•à¯ˆ à®…à®´à¯ˆà®•à¯à®•à®µà¯à®®à¯",
    connectWithUs: "à®Žà®™à¯à®•à®³à¯à®Ÿà®©à¯ à®‡à®£à¯ˆà®¨à¯à®¤",

    // FAQ Page
    faqTitle: "à®…à®Ÿà®¿à®•à¯à®•à®Ÿà®¿ à®•à¯‡à®Ÿà¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿ à®•à¯‡à®³à¯à®µà®¿à®•à®³à¯",
    whatIsSmishing: "Smishing à®Žà®©à¯à®±à®¾à®²à¯ à®Žà®©à¯à®© à®®à®±à¯à®±à¯à®®à¯ à®‡à®¤à¯ à®Žà®ªà¯à®ªà®Ÿà®¿ à®µà¯‡à®²à¯ˆ à®šà¯†à®¯à¯à®•à®¿à®±à®¤à¯?",
    smishingDef: "Smishing SMS à¦«à¦¿à¤¶à¤¿à¦‚ - à®¤à®©à®¿à®ªà¯à®ªà®Ÿà¯à®Ÿ à®¤à®•à®µà®²à¯ à®…à®²à¯à®²à®¤à¯ à®ªà®£à®®à¯ç›—å– à®…à®³à®•à¯à®• à®µà®Ÿà®¿à®µà®®à¯ˆà®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿ à¦œà¦¾à¦²à®®à¯ˆ à®µà®°à¯ˆ à®šà¯†à®¯à¯à®¤à®¿à®•à®³à¯. à®®à¯‹à®šà®£à¯ˆà®•à¯à®•à®¾à®°à®°à¯ à®ªà®™à¯à®•à¯, à®…à®°à®šà¯ à®¨à®¿à®±à¯à®µà®©à®™à¯à®•à®³à¯, à®…à®²à¯à®²à®¤à¯ à®¨à®¿à®±à¯à®µà®©à®™à¯à®•à®³à¯ˆ à®µà¥à¤¯à¤•à±à°¤à¤¿à¤¤à±àªµ à®šà¯†à®¯à¯à®¯ à®‰à®™à¯à®•à®³à¯ˆ à®ªà¯‚à®°à¯à®µ à®‡à®£à¯ˆà®ªà¯à®ªà¯à®•à¯ à®•à®¿à®³à®¿à®•à¯ à®šà¯†à®¯à¯à®¯ à®…à®²à¯à®²à®¤à¯ à®‰à®£à®°à¯à®¤à®¿à®±à®•à¯à®•à¯à®¤à¯ à®¤à®•à®µà®²à¯ à®•à¯‹à®²à¯.",
    howAccurateIs: "à®‰à®™à¯à®•à®³à¯ à®•à®£à¯à®Ÿà®±à®¿à®¤à®±à¯ à®•à®£à®¿à®©à®¿ à®Žà®µà¯à®µà®³à®µà¯ à®¤à¯à¤²à¯à®²à®¿à®¯à®®à®¾à®•?",
    accuracyDef: "à®Žà®™à¯à®•à®³à¯ AI 98% à¤¸à¤Ÿà¥€à¤•à¤¤à¤¾ à®ªà¯†à®±à¯à®•à®¿à®±à®¤à¯. à®¨à®¾à®®à¯ à®‡à®¨à¯à®¤à®¿à®¯à®¾à®µà¯à®•à¯à®•à¯ à®…à®±à®¿à®•à¯à®•à¯ˆ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®Ÿ à®ªà¯à®¤à®¿à®¯ à®®à¯‹à®šà®£à¯ˆ à®¨à¯à®Ÿà¯à®ªà®™à¯à®•à®³à®¿à®²à¯ à®¤à¦¤à¤®à¤¤ à®ªà®¯à®¿à®±à¯à®šà®¿ à®•à¯Šà®Ÿà¯à®•à¯à®•à®¿à®±à¯‹à®®à¯.",
    isReallyFree: "à®‡à®¨à¯à®¤ à®šà±‡à®µà¯ˆ à®‰à®£à¯à®®à®¾à®• à®‡à®²à®µà®šà®®à®¾?",
    freeAnswer: "à®†à®®à¯! SentinelAI à®•à¯‹à®ªà¯à®ªà®¾à®• à®‡à®²à®µà®šà®®à¯. à®Žà®™à¯à®•à®³à¯ à®®à®¿à¤¶à¤¨ à®•à®¿à®°à®¾à®®à®ªà¯à®ªà¯à®± à®‡à®¨à¯à®¤à®¿à®¯à¯ˆ SMS à®®à¯‹à®šà®£à¯ˆà®¯à®¿à®²à®¿à®°à¯à®¨à¯à®¤à¯ à®ªà®¾à®¤à¯à®•à®¾à®ªà¯à®ªà®¤à¯, à¤²à¤¾à¤­ à®…à®²à¯à®².",
    languagesSupported: "à®Žà®¨à¯à®¤ à®®à¯Šà®´à®¿à®•à®³à¯ à®†à®¤à®°à®¿à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®•à®¿à®©à¯à®±à®©?",
    },

};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.english;

export function getTranslation(language: Language, key: TranslationKey): string {
  return translations[language]?.[key] || translations.english[key] || key;
}

export default translations;
