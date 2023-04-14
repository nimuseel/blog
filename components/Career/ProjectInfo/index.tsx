import { CareerProject } from 'components/Career/careerItem';
import React from 'react';
import S from './styles';

interface ProjectInfoProps {
  project: CareerProject;
}

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <>
      <div>
        <S.ProjectName>
          {project.name}
          <span>{project.period}</span>
        </S.ProjectName>

        <p>{project.description}</p>
      </div>
    </>
  );
};
