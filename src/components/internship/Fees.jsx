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
import { FaMobileAlt, FaCreditCard, FaUniversity, FaWallet,FaMoneyBillWave } from "react-icons/fa";
import { MdPayment,MdAccountBalanceWallet,MdAttachMoney } from "react-icons/md";
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
    // Basic validation
    if (currentStep === 1) {
      if (!studentData.fullName || !studentData.email || !studentData.phone) {
        alert('Please fill in all required fields');
        return;
      }
    }
    setCurrentStep(2);
  };

  const handleInstamojoPay = (paymentMethod) => {
    // Create payment URL with student details
    const paymentData = {
      purpose: 'Robotics Course Enrollment',
      amount: '6000',
      buyer_name: studentData.fullName,
      email: studentData.email,
      phone: studentData.phone,
      send_email: true,
      send_sms: true,
      allow_repeated_payments: false
    };

    // Replace with your actual Instamojo payment link
    // You can append parameters or use Instamojo API to create dynamic payment request
    const instaMojoURL = `https://imjo.in/your-payment-link?buyer_name=${encodeURIComponent(paymentData.buyer_name)}&email=${encodeURIComponent(paymentData.email)}&phone=${encodeURIComponent(paymentData.phone)}`;
    
    // Store student data locally before redirecting (in a real app, send to your backend)
    localStorage.setItem('enrollment_data', JSON.stringify(studentData));
    
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Course Enrollment
              </h2>
            </div>
            <button
              onClick={() => {
                setShowEnrollmentForm(false);
                setCurrentStep(1);
                setStudentData({
                  fullName: '', email: '', phone: '', address: '', city: '', education: '', experience: ''
                });
              }}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <X size={16} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            {currentStep === 1 ? (
              // Step 1: Student Details
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Student Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User size={16} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MapPin size={16} className="inline mr-2" />
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={studentData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={studentData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your complete address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Education Level
                    </label>
                    <select
                      name="education"
                      value={studentData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select education level</option>
                      <option value="high_school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Postgraduate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Prior Experience
                    </label>
                    <select
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
                  >
                    <ArrowLeft size={16} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Choose Payment Method
                  </h3>
                </div>

                {/* Order Summary */}
<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Total Fee of Per Student</h4>
  <div className="space-y-2">
    <div className="flex justify-between font-bold text-lg">
      <span className="text-gray-900 dark:text-white">Course Fee</span>
      <span className="text-blue-600">₹6,000</span>
    </div>
  </div>
</div>
                {/* Payment Methods */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Select Payment Method</h4>
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => handleInstamojoPay(method.id)}
                      className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {method.name}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {method.desc}
                            </p>
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900 py-8 px-5 rounded-1xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-10">
          <div className="flex justify-left items-left gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
              <MdAttachMoney className="text-blue-500" size={35} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text dark:text-gray-200 text-transparent">
              Course Investment
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Pricing Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-indigo-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Popular Choice
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text dark:text-white">
                  ₹ 6,000
                </span>
                
              </div>
              
             <p className="text-gray-600 dark:text-gray-300 mt-2 text-base leading-relaxed">
  Industry-Focused Internship in <span className="font-semibold text-indigo-600">Service Robotics</span> and <span className="font-semibold text-pink-600">Applied AI</span>
</p>
</div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {courseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-blue-600 dark:text-blue-400" size={16} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle size={14} className="text-green-500" />
                <span>UPI, Cards, Net Banking, Wallets accepted</span>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Join hundreds of students who have transformed their careers through our comprehensive robotics program. Limited seats available!
              </p>

              {/* Enrollment Button */}
              <button
  onClick={() =>
    window.location.href =
      "https://vtu.internyet.in/internships/523-industry-focused-internship-in-service-robotics-and-applied-ai"
  }
  className="w-50 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 group"
>
  <User size={20} />
  <span className="text-lg">Enroll Now</span>
  <ArrowRight
    size={20}
    className="group-hover:translate-x-1 transition-transform"
  />
</button> 
            </div>
            {/* Contact Info */}
            <div className="text-center p-4 bg-blue-100 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Questions about enrollment? 
                <br />
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Contact us at: info@isparklearning.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}