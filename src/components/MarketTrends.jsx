/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './MarketTrends.module.css';


Chart.register(...registerables);

const MarketTrends = () => {
  
  const urbanCanvasRef = useRef(null);
  const suburbanCanvasRef = useRef(null);


  const urbanChartRef = useRef(null);
  const suburbanChartRef = useRef(null);

  useEffect(() => {
    if (urbanChartRef.current) {
      urbanChartRef.current.destroy();
    }
    if (suburbanChartRef.current) {
      suburbanChartRef.current.destroy();
    }


    if (urbanCanvasRef.current && suburbanCanvasRef.current) {
      
      urbanChartRef.current = new Chart(urbanCanvasRef.current, {
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: 'Urban Area Prices ($)',
              data: [1000000, 1100000, 1150000, 1200000, 1250000],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Urban Property Price Trends',
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                callback: function (value) {
                  return '$' + value.toLocaleString();
                },
              },
            },
          },
        },
      });

      suburbanChartRef.current = new Chart(suburbanCanvasRef.current, {
        type: 'bar',
        data: {
          labels: ['2019', '2020', '2021', '2022', '2023'],
          datasets: [
            {
              label: 'Suburban Area Demand',
              data: [500000, 550000, 600000, 650000, 700000],
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Suburban Demand Growth',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return value.toLocaleString();
                },
              },
            },
          },
        },
      });
    }


    return () => {
      if (urbanChartRef.current) {
        urbanChartRef.current.destroy();
      }
      if (suburbanChartRef.current) {
        suburbanChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.marketTrends}>
      <h1>Current Real Estate Market Trends</h1>

      <section className={styles.overview}>
        <h2>Market Overview</h2>
        <p>
          The real estate market is constantly evolving, with trends and prices fluctuating based on economic conditions, buyer demand, and regional factors. Understanding these trends can help you make informed decisions whether you're buying, selling, or investing in real estate.
        </p>
      </section>

      <section className={styles.trends}>
        <h2>Key Market Trends</h2>

        <div className={styles.trendItem}>
          <h3>Increasing Property Prices in Urban Areas</h3>
          <p>
            Urban areas like San Francisco, New York, and Los Angeles are seeing a steady increase in property prices, driven by high demand and limited inventory. This trend is expected to continue as more people move to these cities for job opportunities and lifestyle benefits.
          </p>
          <canvas ref={urbanCanvasRef} className={styles.chart}></canvas>
          <img
            src="https://images.unsplash.com/photo-1508051123996-69f8caf4891e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Urban Property Prices"
            className={styles.trendImage}
          />
        </div>

        <div className={styles.trendItem}>
          <h3>Suburban Shift</h3>
          <p>
            With the rise of remote work, more buyers are looking for properties in suburban areas where they can get more space and better value for their money. This shift is leading to increased demand in suburban markets, causing prices to rise in these regions as well.
          </p>
          <canvas ref={suburbanCanvasRef} className={styles.chart}></canvas>
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VidXJiYW4lMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Suburban Shift"
            className={styles.trendImage}
          />
        </div>
      </section>

      <section className={styles.videoSection}>
        <h2>Understanding Market Trends</h2>
        <p>
          Watch this video to gain deeper insights into current real estate market trends and how they can impact your buying or selling decisions.
        </p>
        <div className={styles.videoContainer}>
            <div className={styles.videoOverlay}>
          <img
            src="https://img.youtube.com/vi/iLsZlrZIFwU/maxresdefault.jpg"
            alt="Market Trend Video"
            className={styles.videoThumbnail} />
          <div className={styles.playButton}>
            <a
              href="https://www.youtube.com/watch?v=iLsZlrZIFwU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdn.pixabay.com/photo/2021/06/25/04/20/youtube-6362801_640.png" alt="Play Video" />
            </a>
          </div>
        </div>
      </div>
      </section>

      <section className={styles.resources}>
        <h2>Additional Resources</h2>
        <p>
          For more insights and detailed reports on market trends, visit our{' '}
          <a href="/resources">Resources</a> section.
        </p>
      </section>
    </div>
  );
};

export default MarketTrends;
