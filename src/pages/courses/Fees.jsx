import { 
  DollarSign, 
  CreditCard, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Trophy,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  X,
  ArrowLeft
} from "lucide-react";

import { useState } from "react";
import { FaMobileAlt, FaCreditCard, FaUniversity, FaWallet } from "react-icons/fa";

export default function FeesEnrollmentSection() {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [studentData, setStudentData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    education: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    // Basic validation for step 1 required fields
    if (currentStep === 1) {
      if (!studentData.fullName.trim() || !studentData.email.trim() || !studentData.phone.trim()) {
        alert('Please fill in all required fields');
        return;
      }
    }
    setCurrentStep(2);
  };

  const handleInstamojoPay = (paymentMethod) => {
    // Create payment URL with student details (replace with real API or payment link creation)
    const instaMojoURL = `https://imjo.in/your-payment-link?buyer_name=${encodeURIComponent(studentData.fullName)}&email=${encodeURIComponent(studentData.email)}&phone=${encodeURIComponent(studentData.phone)}`;

    // Store student data locally before redirecting (replace with backend call in production)
    localStorage.setItem('enrollment_data', JSON.stringify(studentData));

    // Open payment gateway link in new tab
    window.open(instaMojoURL, '_blank');
  };

  const courseFeatures = [
    { icon: Clock, text: "12-week comprehensive program" },
    { icon: Users, text: "Small batch size (max 20 students)" },
    { icon: Trophy, text: "Industry-recognized certification" },
    { icon: Calendar, text: "Flexible weekend schedules" }
  ];

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      desc: "Pay using Google Pay, PhonePe, Paytm",
      icon: <FaMobileAlt className="text-xl text-blue-500" />,
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      desc: "Visa, Mastercard, Rupay accepted",
      icon: <FaCreditCard className="text-xl text-green-500" />,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      desc: "All major banks supported",
      icon: <FaUniversity className="text-xl text-purple-500" />,
    },
    {
      id: "wallet",
      name: "Digital Wallets",
      desc: "Paytm, Amazon Pay, etc.",
      icon: <FaWallet className="text-xl text-yellow-500" />,
    },
  ];

  if (showEnrollmentForm) {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-12 px-6 rounded-2xl shadow-lg">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Course Enrollment</h2>
            </div>
            <button
              onClick={() => {
                setShowEnrollmentForm(false);
                setCurrentStep(1);
                setStudentData({
                  fullName: '',
                  email: '',
                  phone: '',
                  address: '',
                  city: '',
                  education: '',
                  experience: ''
                });
              }}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Close Enrollment Form"
            >
              <X size={16} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
              <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            {currentStep === 1 ? (
              // Step 1: Student Details Form
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Student Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User size={16} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={studentData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={studentData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={studentData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MapPin size={16} className="inline mr-2" />
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={studentData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={studentData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your complete address"
                    />
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Education Level</label>
                    <select
                      id="education"
                      name="education"
                      value={studentData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select education level</option>
                      <option value="high_school">High School</option>
                      <option>Diploma</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Postgraduate</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Prior Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      value={studentData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Continue to Payment
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              // Step 2: Payment Options
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Back to Student Information"
                  >
                    <ArrowLeft size={16} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Choose Payment Method</h3>
                </div>

             

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Select Payment Method</h4>
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => handleInstamojoPay(method.id)}
                      className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer transition-all duration-200 group"
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => { if (e.key === 'Enter') handleInstamojoPay(method.id); }}
                      aria-label={`Pay using ${method.name}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {method.name}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{method.desc}</p>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Security Info */}
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-green-700 dark:text-green-300">
                      Secure payment powered by Instamojo • SSL encrypted • PCI DSS compliant
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-12 px-6 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-10">
          <div className="flex justify-start items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text dark:text-gray-200 text-transparent">
              Course Investment
            </h2>
          </div>
        </div>
        {/* Enrollment Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Join hundreds of students who have transformed their careers through our comprehensive program. Limited seats available!
            </p>

            {/* Enrollment Button */}
            <button
              onClick={() => setShowEnrollmentForm(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-3 rounded-1xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
              aria-label="Enroll Now"
            >
              <User size={20} />
              <span className="text-lg">Enroll Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-left text-sm text-gray-500 dark:text-gray-400 mt-4">
              Secure checkout • Full refund if not satisfied
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Questions about enrollment? <br />
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Contact us at: <a href="mailto:info@isparklearning.com" className="underline">info@isparklearning.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
