import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaCalendar, FaUser, FaTimes } from 'react-icons/fa';
import './BlogSystem.css';

const BlogSystem = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: 'SAK Legal Team',
    category: 'Legal News',
    image: ''
  });

  // Secret key for admin access (you can change this)
  const ADMIN_SECRET = 'sak2024admin';

  // Load blogs from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem('sakLegalBlogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      // Default blogs
      const defaultBlogs = [
        {
          id: 1,
          title: 'Understanding Corporate Law in Modern Business',
          content: `Corporate law plays a crucial role in the business world today. It encompasses various aspects of company formation, governance, and compliance that every business owner should understand.

In today's rapidly evolving business landscape, corporate law provides the framework that ensures companies operate within legal boundaries while maximizing their potential for growth and success.

Key areas of corporate law include:
- Company formation and structuring
- Board governance and fiduciary duties
- Mergers and acquisitions
- Securities law compliance
- Employment law considerations

At SAK Legal & Associates, we provide comprehensive corporate law services to help businesses navigate these complex legal requirements. Our experienced team ensures that your company remains compliant while pursuing its strategic objectives.

Whether you're a startup looking to incorporate or an established business considering expansion, understanding corporate law is essential for making informed decisions that protect your interests and drive sustainable growth.`,
          excerpt: 'Corporate law provides the essential framework for modern businesses. Learn about key areas including company formation, governance, and compliance requirements.',
          author: 'Advocate K. R. Saklikar',
          category: 'Corporate Law',
          date: '2024-01-15',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=600&h=300&fit=crop'
        },
        {
          id: 2,
          title: 'Real Estate Law: Key Considerations for Property Transactions',
          content: `Real estate transactions involve significant legal complexities that require careful attention to detail. Whether you're buying, selling, or investing in property, understanding the legal aspects is crucial for protecting your interests.

Property law encompasses various elements including title verification, due diligence, contract negotiation, and regulatory compliance. Each transaction is unique and requires a thorough understanding of local laws and regulations.

Important considerations in real estate law:
- Title searches and verification
- Property due diligence
- Contract drafting and review
- Regulatory approvals and compliance
- Tax implications and planning
- Dispute resolution mechanisms

Our real estate law practice at SAK Legal & Associates has successfully handled thousands of property transactions. We provide end-to-end legal support to ensure smooth and secure property deals.

From residential purchases to commercial developments, our team brings extensive experience and attention to detail that gives our clients confidence in their real estate investments.`,
          excerpt: 'Navigate property transactions with confidence. Understand key legal considerations including title verification, due diligence, and regulatory compliance.',
          author: 'Advocate Amit Saklikar',
          category: 'Real Estate Law',
          date: '2024-01-10',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=600&h=300&fit=crop'
        },
        {
          id: 3,
          title: 'Family Law Matters: Protecting Your Rights and Interests',
          content: `Family law matters are often emotionally challenging and require sensitive handling combined with strong legal expertise. Our approach focuses on protecting your rights while seeking amicable solutions whenever possible.

Family law covers a wide range of issues that affect the most personal aspects of our lives. From marriage and divorce to child custody and adoption, these matters require both legal knowledge and emotional intelligence.

Areas we specialize in:
- Divorce and separation proceedings
- Child custody and support matters
- Adoption procedures
- Domestic violence protection
- Property division and alimony
- Prenuptial and postnuptial agreements

At SAK Legal & Associates, we understand that family law matters require a delicate balance of legal expertise and compassionate support. Our team is committed to achieving the best possible outcomes while minimizing emotional stress.

We believe in exploring all available options, including mediation and collaborative law, to resolve family disputes in a manner that preserves relationships and protects the interests of all family members, especially children.`,
          excerpt: 'Family law matters require both legal expertise and emotional intelligence. Learn about divorce, custody, adoption, and other family legal issues.',
          author: 'Advocate Pallavi Saklikar',
          category: 'Family Law',
          date: '2024-01-05',
          image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&w=600&h=300&fit=crop'
        }
      ];
      setBlogs(defaultBlogs);
      localStorage.setItem('sakLegalBlogs', JSON.stringify(defaultBlogs));
    }
  }, []);

  // Listen for secret key input
  useEffect(() => {
    let keyBuffer = '';
    const handleKeyPress = (e) => {
      keyBuffer += e.key;
      if (keyBuffer.length > 20) {
        keyBuffer = keyBuffer.slice(-20);
      }
      if (keyBuffer.includes(ADMIN_SECRET)) {
        setShowAdminPanel(true);
        keyBuffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const saveBlogsToStorage = (updatedBlogs) => {
    localStorage.setItem('sakLegalBlogs', JSON.stringify(updatedBlogs));
  };

  const handleAdminAuth = () => {
    if (secretKey === ADMIN_SECRET) {
      setIsAuthenticated(true);
      setSecretKey('');
    } else {
      alert('Invalid secret key');
      setSecretKey('');
    }
  };

  const handleAddBlog = () => {
    if (!blogForm.title || !blogForm.content) {
      alert('Please fill in required fields');
      return;
    }

    const newBlog = {
      id: editingBlog ? editingBlog.id : Date.now(),
      ...blogForm,
      date: editingBlog ? editingBlog.date : new Date().toISOString().split('T')[0]
    };

    let updatedBlogs;
    if (editingBlog) {
      updatedBlogs = blogs.map(blog => blog.id === editingBlog.id ? newBlog : blog);
    } else {
      updatedBlogs = [newBlog, ...blogs];
    }

    setBlogs(updatedBlogs);
    saveBlogsToStorage(updatedBlogs);
    resetForm();
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      saveBlogsToStorage(updatedBlogs);
    }
  };

  const handleEditBlog = (blog) => {
    setBlogForm(blog);
    setEditingBlog(blog);
    setShowBlogForm(true);
  };

  const resetForm = () => {
    setBlogForm({
      title: '',
      content: '',
      excerpt: '',
      author: 'SAK Legal Team',
      category: 'Legal News',
      image: ''
    });
    setEditingBlog(null);
    setShowBlogForm(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="blog-system section" id="blog">
      <div className="container">
        <div className="section-header">
          <h2>Legal Insights & News</h2>
          <p>Stay updated with the latest legal developments and expert insights from our experienced team</p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-category">{blog.category}</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-author">
                    <FaUser /> {blog.author}
                  </span>
                  <span className="blog-date">
                    <FaCalendar /> {formatDate(blog.date)}
                  </span>
                </div>
                <button className="read-more-btn">
                  <FaEye /> Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="no-blogs">
            <p>No blogs available at the moment. Check back soon for latest updates!</p>
          </div>
        )}
      </div>

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="admin-overlay">
          <div className="admin-panel">
            <div className="admin-header">
              <h3>Blog Administration</h3>
              <button onClick={() => setShowAdminPanel(false)}>
                <FaTimes />
              </button>
            </div>

            {!isAuthenticated ? (
              <div className="admin-auth">
                <h4>Enter Secret Key</h4>
                <input
                  type="password"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter admin secret key"
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminAuth()}
                />
                <button onClick={handleAdminAuth}>Authenticate</button>
              </div>
            ) : (
              <div className="admin-content">
                <div className="admin-actions">
                  <button 
                    className="add-blog-btn"
                    onClick={() => setShowBlogForm(true)}
                  >
                    <FaPlus /> Add New Blog
                  </button>
                </div>

                <div className="admin-blog-list">
                  <h4>Manage Blogs ({blogs.length})</h4>
                  {blogs.map((blog) => (
                    <div key={blog.id} className="admin-blog-item">
                      <div className="admin-blog-info">
                        <h5>{blog.title}</h5>
                        <span>{blog.category} • {formatDate(blog.date)}</span>
                      </div>
                      <div className="admin-blog-actions">
                        <button onClick={() => handleEditBlog(blog)}>
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDeleteBlog(blog.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Blog Form Modal */}
      {showBlogForm && (
        <div className="blog-form-overlay">
          <div className="blog-form-modal">
            <div className="form-header">
              <h3>{editingBlog ? 'Edit Blog' : 'Add New Blog'}</h3>
              <button onClick={resetForm}>
                <FaTimes />
              </button>
            </div>
            <div className="form-content">
              <input
                type="text"
                placeholder="Blog Title *"
                value={blogForm.title}
                onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={blogForm.image}
                onChange={(e) => setBlogForm({...blogForm, image: e.target.value})}
              />
              <textarea
                placeholder="Blog Excerpt (Brief description) *"
                value={blogForm.excerpt}
                onChange={(e) => setBlogForm({...blogForm, excerpt: e.target.value})}
                rows="3"
              />
              <textarea
                placeholder="Blog Content *"
                value={blogForm.content}
                onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                rows="8"
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Author"
                  value={blogForm.author}
                  onChange={(e) => setBlogForm({...blogForm, author: e.target.value})}
                />
                <select
                  value={blogForm.category}
                  onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                >
                  <option value="Legal News">Legal News</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Real Estate Law">Real Estate Law</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Civil Litigation">Civil Litigation</option>
                </select>
              </div>
              <div className="form-actions">
                <button onClick={resetForm} className="cancel-btn">Cancel</button>
                <button onClick={handleAddBlog} className="save-btn">
                  {editingBlog ? 'Update Blog' : 'Add Blog'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSystem;