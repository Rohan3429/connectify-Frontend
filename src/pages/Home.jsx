// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//       <header>
//         <h1>Welcome to Our Platform</h1>
//         <nav>
//           <ul>
//             <li><Link to="/register">Register</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <section>
//           <h2>About Us</h2>
//           <p>Our platform provides a seamless experience for students, professors, and proctors.</p>
//         </section>
//         <section>
//           <h2>Features</h2>
//           <ul>
//             <li>Student Portal</li>
//             <li>Professor Portal</li>
//             <li>Proctor Portal</li>
//           </ul>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2023 Our Platform. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import { BookOpen, Users, Award, Brain, Clock, Shield } from 'lucide-react';
import { 
  BookOpen, Users, Award, Brain, Clock, Shield, 
  ChevronDown, Star, CheckCircle, PlayCircle
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Connectify</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
            Learning Made <span className="text-blue-600">Fun</span> and <span className="text-blue-600">Easy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our friendly learning community where students, teachers, and mentors come together to make education exciting!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform hover:scale-105">
              Start Learning Now
            </Link>
            <Link to="/about" className="px-8 py-4 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Connectify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Unified Platform",
                description: "Connectify brings together announcements, attendance, grades, and messaging in one place!"
              },
              {
                icon: <Brain className="h-8 w-8 text-blue-600" />,
                title: "Improved Communication",
                description: "Connectify's built-in messaging system enhances interactions between students, professors, and administrators!"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Role-Based Customization",
                description: "Designed for various roles like students, professors, and admins, Connectify offers tailored features for each user type!"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Something for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Students",
                icon: <Award className="h-12 w-12 text-blue-600" />,
                description: "View Announcements, Attendance Tracking, Grade Viewing, Direct Messaging, Profile Management"
              },
              {
                title: "Teachers",
                icon: <Users className="h-12 w-12 text-blue-600" />,
                description: "Manage Attendance, Grade Submission, Post Announcements, Messaging System, Club Lead Nomination"
              },
              {
                title: "Proctors",
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                description: "Monitor Attendance, Student Support, Communication with Professors and Students, Manage Student Profiles"
              }
            ].map((role, index) => (
              <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 transition-colors">
                <div className="flex flex-col items-center text-center">
                  {role.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{role.title}</h3>
                  <p className="mt-2 text-gray-600">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Statistics Section */}
       <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Happy Students" },
              { number: "200+", label: "Expert Teachers" },
              { number: "20+", label: "Courses" },
              { number: "90%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600">Our Story</Link></li>
                <li><Link to="/team" className="text-gray-600 hover:text-blue-600">Team</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-600 hover:text-blue-600">Help Center</Link></li>
                <li><Link to="/guides" className="text-gray-600 hover:text-blue-600">Guides</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link></li>
                <li><Link to="/security" className="text-gray-600 hover:text-blue-600">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} EduLearn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;