import * as React from "react";
import styles from "./Projects.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import projects from "../../../projects.json";

const Projects = () => {
  return (
    <div className={styles.projects} id="section5">
      <h1>Proyectos</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        breakpoints={{
          250: {
            slidesPerView: 0.5
          },
          640: {
            slidesPerView: 2,
          }}
        }
        coverflowEffect={{
          rotate: 30,
          stretch: 40,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        loop={true}
        autoplay={{ delay: 2700, disableOnInteraction: false }} 
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.mySwiper}
      >
        {projects.map((project) => (
          <SwiperSlide className={styles.swiperBox} key={project.id}>
            <div className={styles.boxProjects}>
              <div className={styles.projectCard}>
                <img src={project.bg} alt={project.title} className={styles.projectImage} />
                <div className={styles.projectInfo}>
                  <h2>{project.title}</h2>
                  <p>Tecnologías: {project.tecnologias}</p>
                  <p className={styles.projectText}>{project.descripcion}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
