import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaHandshake, 
  FaRocket,
  FaSearch,
  FaCalendarAlt,
  FaComments,
  FaStar
} from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: FaSearch,
      title: 'Discover Skills',
      description: 'Browse through thousands of skills offered by our community members.'
    },
    {
      icon: FaHandshake,
      title: 'Skill Exchange',
      description: 'Trade your expertise for new knowledge in a fair exchange system.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Schedule Sessions',
      description: 'Book and manage learning sessions with other members easily.'
    },
    {
      icon: FaComments,
      title: 'Connect & Chat',
      description: 'Build relationships and communicate with your learning partners.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Active Users' },
    { number: '500+', label: 'Skills Available' },
    { number: '2000+', label: 'Sessions Completed' },
    { number: '4.8', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Learn & Share
                <span className="block text-yellow-300">Skills Together</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join our community of learners and experts. Exchange skills, build connections, 
                and grow together in a collaborative learning environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/skills"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Browse Skills
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Web Development</h3>
                      <p className="text-blue-200 text-sm">by Sarah Johnson</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <FaUsers className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Public Speaking</h3>
                      <p className="text-blue-200 text-sm">by Mike Chen</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                      <FaRocket className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Digital Marketing</h3>
                      <p className="text-blue-200 text-sm">by Emma Davis</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes skill exchange simple and effective. Here's how you can get started.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of learners who are already exchanging skills and growing together.
            </p>
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Join SkillSwap Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 