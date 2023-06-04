import React from 'react';
import S from './styles';

interface ProjectListProps {
  children: React.ReactNode;
}

export const ProjectList = ({ children }: ProjectListProps) => {
  return <S.ProjectList>{children}</S.ProjectList>;
};
