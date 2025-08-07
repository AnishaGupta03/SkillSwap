import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaMapMarkerAlt, 
  FaPlus,
  FaCheck,
  FaTimes,
  FaStar,
  FaVideo,
  FaPhone
} from 'react-icons/fa';

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        // Mock data for sessions
        const mockSessions = [
          {
            id: 1,
            title: 'Web Development Basics',
            instructor: 'Sarah Johnson',
            student: 'John Doe',
            date: '2024-01-20',
            time: '14:00',
            duration: '2 hours',
            status: 'upcoming',
            type: 'video',
            location: 'Zoom Meeting',
            description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.'
          },
          {
            id: 2,
            title: 'Public Speaking Workshop',
            instructor: 'Mike Chen',
            student: 'Jane Smith',
            date: '2024-01-18',
            time: '10:00',
            duration: '1.5 hours',
            status: 'completed',
            type: 'in-person',
            location: 'Central Library',
            description: 'Master the art of public speaking and presentation skills.',
            rating: 5
          },
          {
            id: 3,
            title: 'Digital Marketing Strategy',
            instructor: 'Emma Davis',
            student: 'Alex Wilson',
            date: '2024-01-22',
            time: '16:00',
            duration: '3 hours',
            status: 'upcoming',
            type: 'video',
            location: 'Google Meet',
            description: 'Learn SEO, social media marketing, and content strategy.'
          },
          {
            id: 4,
            title: 'Spanish Conversation',
            instructor: 'Maria Rodriguez',
            student: 'Tom Brown',
            date: '2024-01-15',
            time: '11:00',
            duration: '1 hour',
            status: 'completed',
            type: 'video',
            location: 'Skype',
            description: 'Practice conversational Spanish with native speakers.',
            rating: 4
          }
        ];
        
        setSessions(mockSessions);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const filteredSessions = sessions.filter(session => {
    if (selectedFilter === 'all') return true;
    return session.status === selectedFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <FaVideo className="h-4 w-4" />;
      case 'in-person':
        return <FaMapMarkerAlt className="h-4 w-4" />;
      case 'phone':
        return <FaPhone className="h-4 w-4" />;
      default:
        return <FaCalendarAlt className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video':
        return 'bg-purple-100 text-purple-600';
      case 'in-person':
        return 'bg-green-100 text-green-600';
      case 'phone':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Sessions</h1>
              <p className="text-gray-600">
                Manage your learning sessions and track your progress
              </p>
            </div>
            <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaPlus className="mr-2" />
              Schedule Session
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Sessions' },
              { id: 'upcoming', label: 'Upcoming' },
              { id: 'completed', label: 'Completed' },
              { id: 'cancelled', label: 'Cancelled' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sessions List */}
        <div className="space-y-6">
          {filteredSessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                {/* Session Info */}
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(session.type)}`}>
                      {getTypeIcon(session.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{session.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                          {session.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{session.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <FaUser className="mr-2" />
                          <span>
                            {session.status === 'upcoming' ? 'Instructor' : 'Student'}: {session.instructor}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt className="mr-2" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaClock className="mr-2" />
                          <span>{session.time} ({session.duration})</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2 lg:ml-6">
                  {session.status === 'upcoming' && (
                    <>
                      <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <FaVideo className="mr-2" />
                        Join Session
                      </button>
                      <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <FaClock className="mr-2" />
                        Reschedule
                      </button>
                    </>
                  )}
                  
                  {session.status === 'completed' && session.rating && (
                    <div className="flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                      <FaStar className="mr-2" />
                      Rated {session.rating}/5
                    </div>
                  )}
                  
                  {session.status === 'completed' && !session.rating && (
                    <button className="flex items-center justify-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                      <FaStar className="mr-2" />
                      Rate Session
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSessions.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <FaCalendarAlt className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
            <p className="text-gray-600 mb-4">
              {selectedFilter === 'all' 
                ? "You don't have any sessions yet. Start by scheduling your first learning session!"
                : `No ${selectedFilter} sessions found.`
              }
            </p>
            {selectedFilter === 'all' && (
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FaPlus className="mr-2" />
                Schedule Your First Session
              </button>
            )}
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {sessions.filter(s => s.status === 'upcoming').length}
            </div>
            <div className="text-gray-600">Upcoming Sessions</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {sessions.filter(s => s.status === 'completed').length}
            </div>
            <div className="text-gray-600">Completed Sessions</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {sessions.filter(s => s.type === 'video').length}
            </div>
            <div className="text-gray-600">Video Sessions</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              {sessions.filter(s => s.rating).reduce((acc, s) => acc + s.rating, 0) / sessions.filter(s => s.rating).length || 0}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sessions; 