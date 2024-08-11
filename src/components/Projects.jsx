import { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {

    const [expandedProject, setExpandedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Apartments',
      location: 'San Francisco, CA',
      status: 'Under Construction',
      description: 'A collection of modern luxury apartments with breathtaking views of the city. Expected completion by the end of 2026.',
      moreDetails: 'These apartments are located in the heart of San Francisco, offering easy access to all major attractions and business districts. The project features state-of-the-amenities, including a rooftop pool, fitness center, and private parking.',
      image: '/projects/apartments.jpg'
    },
    {
      id: 2,
      title: 'Eco-friendly Housing Development',
      location: 'Los Angeles, CA',
      status: 'Completed',
      description: 'A sustainable housing project that integrates green technologies and eco-friendly materials. Available for immediate purchase.',
      moreDetails: 'This project features a mix of single-family homes and townhouses, all designed',
      image: '/projects/apartment1.avif'
    },
    {
      id: 3,
      title: 'Seaside Villas',
      location: 'Miami, FL',
      status: 'Pre-sale',
      description: 'Exclusive seaside villas offering luxury living with direct access to private beaches. Pre-sale starts in Fall 2025.',
      moreDetails: 'Each villa features a private pool, outdoor kitchen, and stunning ocean views.',
      image: '/projects/apartment2.png'
    },
    {
        id: 4,
        title: 'Urban Townhouses',
        location: 'New York, NY',
        status: 'Under Construction',
        description: 'A collection of urban townhouses in the heart of the city. Expected completion by the end of 2027.',
        moreDetails: 'These townhouses feature modern design, high ceilings, and large windows, offering',
        image: '/projects/apartment3.avif'
    },
    {
        id: 5,
        title: 'Luxury Condos',
        location: 'Chicago, IL',
        status: 'Completed',
        description: 'Luxury condos with stunning views of the city skyline. Available for immediate purchase.',
        moreDetails: 'The project offers a range of amenities, including a fitness center, spa, and rooftop garden.',
        image: '/projects/apartment4.webp'
    },
    {
        id: 6,
        title: 'Mountain Retreat',
        location: 'Denver, CO',
        status: 'Pre-sale',
        description: 'Luxury mountain retreat with panoramic views of the Rockies. Pre-sale starts in Spring 2026.',
        moreDetails: 'The retreat features a mix of cabins and lodges, all designed to blend in with the natural surroundings.',
        image: '/projects/apartment5.jpg'
    },
    {
        id: 7,
        title: 'Golf Course Community',
        location: 'Phoenix, AZ',
        status: 'Under Construction',
        description: 'A golf course community with luxury homes and resort-style amenities. Expected completion by the end of 2028.',
        moreDetails: 'The community features a championship golf course, clubhouse, and spa, offering residents the ultimate in luxury living.',
        image: '/projects/apartment6.jpg'
    },
    {
        id: 8,
        title: 'Lakefront Residences',
        location: 'Seattle, WA',
        status: 'Completed',
        description: 'Luxury lakefront residences with private boat docks. Available for immediate purchase.',
        moreDetails: 'The residences offer stunning views of the lake and surrounding mountains, with easy access to water sports and outdoor activities.',
        image: '/projects/apartment7.jpg'
    },
    {
        id: 9,
        title: 'Ski-in/Ski-out Chalets',
        location: 'Aspen, CO',
        status: 'Pre-sale',
        description: 'Ski-in/ski-out chalets with direct access to the slopes. Pre-sale starts in Winter 2025.',
        moreDetails: 'The chalets feature modern alpine design, with spacious living areas, private hot tubs, and ski storage.',
        image: '/projects/apartment9.jpg'
    }
  ];

  const handleToggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className={styles.projects}>
      <h1>Our Latest Real Estate Projects</h1>
      <p>Explore our exclusive real estate projects that are setting new standards in luxury living. From modern apartments in the heart of the city to eco-friendly developments, our projects offer something for every discerning buyer.</p>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectDetails}>
              <h2>{project.title}</h2>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Status:</strong> {project.status}</p>
              <p>{project.description}</p>
              <button className={styles.detailsButton} onClick={() => handleToggleExpand(project.id)}>{expandedProject === project.id ? 'Show Less' : 'Learn More'}</button>
                {expandedProject === project.id && (
                <div className={styles.moreDetails}>
                  <p>{project.moreDetails}</p>
                </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
