import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelinetype}`}
            contentStyle={
              item.timelinetype === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelinetype === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.daterange}  {/* Ensure 'date' is correctly passed */}
            iconStyle={
              item.timelinetype === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelinetype === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelinetype === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techstack}</p>
                <p>{item.summarypoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summarypoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}

        {/* Add Himanshu Patel's Work Experience Timeline Entries with Explicit Dates */}
        <VerticalTimelineElement
          date="03/2021 - Current"  {/* Ensure date is explicitly set here */}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Technical Product Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">Old Dominion University</h4>
          <p className="vertical-timeline-element-tech">Enterprise IoT, Agile, Scalable Solutions</p>
          <p>
            • Designed and implemented scalable enterprise IoT solutions supporting 55,000+ users annually. <br />
            • Led cross-functional teams using SAFe methodology to improve user experience and streamline operations. <br />
            • Directed the development of high-performance system architectures, ensuring scalability and efficiency. <br />
            • Spearheaded CI/CD pipeline integrations, reducing development cycles by 25%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="09/2019 - 03/2023"  {/* Ensure date is explicitly set here */}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Product Owner/Manager of Network and IoT Applications</h3>
          <h4 className="vertical-timeline-element-subtitle">Old Dominion University</h4>
          <p className="vertical-timeline-element-tech">IoT, Agile, Team Leadership</p>
          <p>
            • Managed a team of 15+ to deliver IoT projects on time and within budget. <br />
            • Led enterprise application integration, deploying patches for 15,000 devices, increasing security by 42%. <br />
            • Transformed data insights into customer-focused IoT products, enhancing system security and user experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="09/2016 - 09/2019"  {/* Ensure date is explicitly set here */}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lead Converged Technology Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Old Dominion University</h4>
          <p className="vertical-timeline-element-tech">IoT, Agile, Cross-functional Teams</p>
          <p>
            • Led IoT product development, improving security by 42% across 15,000 devices. <br />
            • Managed multi-team sprints to prioritize needs, set milestones, and enhance security.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="12/2014 - 09/2016"  {/* Ensure date is explicitly set here */}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Systems Administrator</h3>
          <h4 className="vertical-timeline-element-subtitle">Old Dominion University</h4>
          <p className="vertical-timeline-element-tech">CS-Gold, BASIS, IPVS, System Automation</p>
          <p>
            • Managed CS-Gold and BASIS systems, improving uptime by 25%. <br />
            • Automated tasks, increasing efficiency by 70%, while ensuring 24/7 system availability.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
