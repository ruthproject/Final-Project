using DAL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class Convert
    {
        public static object convert(this object entity)
        {
            string getType = entity.GetType().ToString();

            if (getType.Contains("TAssistant_"))
            {
                TAssistantDTO assistantDTO = new TAssistantDTO();
                assistantDTO.AssistantId = ((TAssistant)entity).AssistantId;
                assistantDTO.UserId = ((TAssistant)entity).UserId;
                assistantDTO.Status = ((TAssistant)entity).Status;
                assistantDTO.ProfessionId = ((TAssistant)entity).ProfessionId;
                //assistantDTO.TUserDTO = (TUserDTO)convert(((TAssistant)entity).TUser);
                //assistantDTO.TAssistantHoursDTO = (ICollection<TAssistantHoursDTO>)convert(((TAssistant)entity).TAssistantHours);
                //assistantDTO.TAssistantToProjectsDTO = (ICollection<TAssistantToProjectDTO>)convert(((TAssistant)entity).TAssistantToProjects);
                return assistantDTO;
            }
            else if (getType.Equals("DTO.tables.TAssistantDTO"))
            {
                TAssistant assistantDAL = new TAssistant();
                assistantDAL.AssistantId = ((TAssistantDTO)entity).AssistantId;
                assistantDAL.UserId = ((TAssistantDTO)entity).UserId;
                assistantDAL.Status = ((TAssistantDTO)entity).Status;
                assistantDAL.ProfessionId = ((TAssistantDTO)entity).ProfessionId;
                //assistantDAL.TUser = (TUser)convert(((TAssistantDTO)entity).TUserDTO);
                //assistantDAL.TAssistantHours = (ICollection<TAssistantHour>)convert(((TAssistantDTO)entity).TAssistantHoursDTO);
                //assistantDAL.TAssistantToProjects = (ICollection<TAssistantToProject>)convert(((TAssistantDTO)entity).TAssistantToProjectsDTO);
                return assistantDAL;
            }
            else if (getType.Contains("TUser_"))
            {
                TUserDTO userDTO = new TUserDTO();
                userDTO.UserId = ((TUser)entity).UserId;
                userDTO.UserName = ((TUser)entity).UserName;
                userDTO.UserPassword = ((TUser)entity).UserPassword;
                userDTO.UserPermissionId = ((TUser)entity).UserPermissionId;
                userDTO.FirstName = ((TUser)entity).FirstName;
                userDTO.LastName = ((TUser)entity).LastName;
                userDTO.Mail = ((TUser)entity).Mail;
                userDTO.NumbarPhone = ((TUser)entity).NumbarPhone;
                return userDTO;
            }
            else if (getType.Equals("DTO.tables.TUserDTO"))
            {
                TUser useDAL = new TUser();
                useDAL.UserId = ((TUserDTO)entity).UserId;
                useDAL.UserName = ((TUserDTO)entity).UserName;
                useDAL.UserPassword = ((TUserDTO)entity).UserPassword;
                useDAL.UserPermissionId = ((TUserDTO)entity).UserPermissionId;
                useDAL.FirstName = ((TUserDTO)entity).FirstName;
                useDAL.LastName = ((TUserDTO)entity).LastName;
                useDAL.Mail = ((TUserDTO)entity).Mail;
                useDAL.NumbarPhone = ((TUserDTO)entity).NumbarPhone;
                return useDAL;
            }
            else if (getType.Contains("TAssistantHour_"))
            {
                TAssistantHoursDTO assistantHourDTO = new TAssistantHoursDTO();
                assistantHourDTO.AssistantHoursId = ((TAssistantHour)entity).AssistantHoursId;
                assistantHourDTO.AssistantId = ((TAssistantHour)entity).AssistantId;
                assistantHourDTO.BeginningTime = ((TAssistantHour)entity).BeginningTime;
                assistantHourDTO.EndTime = ((TAssistantHour)entity).EndTime;
                assistantHourDTO.WathToDo = ((TAssistantHour)entity).WathToDo;
                assistantHourDTO.ProjectId = ((TAssistantHour)entity).ProjectId;
                assistantHourDTO.finishChores = ((TAssistantHour)entity).finishChores;
                //assistantHourDTO.TAssistantDTO = (TAssistantDTO)convert(((TAssistantHour)entity).TAssistant);
                //assistantHourDTO.TStatusDTO = (TStatusDTO)convert(((TAssistantHour)entity).TStatu);
                return assistantHourDTO;
            }
            else if (getType.Equals("DTO.tables.TAssistantHoursDTO"))
            {
                TAssistantHour assistantHoursDAL = new TAssistantHour();
                assistantHoursDAL.AssistantHoursId = ((TAssistantHoursDTO)entity).AssistantHoursId;
                assistantHoursDAL.AssistantId = ((TAssistantHoursDTO)entity).AssistantId;
                assistantHoursDAL.BeginningTime = ((TAssistantHoursDTO)entity).BeginningTime;
                assistantHoursDAL.EndTime = ((TAssistantHoursDTO)entity).EndTime;
                assistantHoursDAL.WathToDo = ((TAssistantHoursDTO)entity).WathToDo;
                assistantHoursDAL.ProjectId = ((TAssistantHoursDTO)entity).ProjectId;
                assistantHoursDAL.finishChores = ((TAssistantHoursDTO)entity).finishChores;
                //assistantHoursDAL.TAssistant = (TAssistant)convert(((TAssistantHoursDTO)entity).TAssistantDTO);
                //assistantHoursDAL.TStatu = (TStatu)convert(((TAssistantHoursDTO)entity).TStatusDTO);
                return assistantHoursDAL;
            }
            else if (getType.Contains("TDestinationGroup"))
            {
                TDestinationGroupDTO destinationGroupDTO = new TDestinationGroupDTO();
                destinationGroupDTO.DestinationId = ((TDestinationGroup)entity).DestinationId;
                destinationGroupDTO.DestinationDate = ((TDestinationGroup)entity).DestinationDate;
                destinationGroupDTO.DestinationTypeId = ((TDestinationGroup)entity).DestinationTypeId;
                destinationGroupDTO.GradeId = ((TDestinationGroup)entity).GradeId;
                //destinationGroupDTO.TDestinationTypeDTO = (TDestinationTypeDTO)convert(((TDestinationGroup)entity).TDestinationType);
                //destinationGroupDTO.TGradeDTO = (TGradeDTO)convert(((TDestinationGroup)entity).TGrade);
                return destinationGroupDTO;
            }
            else if (getType.Contains("DTO.tables.TDestinationGroupDTO"))
            {
                TDestinationGroup destinationGroupDAL = new TDestinationGroup();
                destinationGroupDAL.DestinationId = ((TDestinationGroupDTO)entity).DestinationId;
                destinationGroupDAL.DestinationDate = ((TDestinationGroupDTO)entity).DestinationDate;
                destinationGroupDAL.DestinationTypeId = ((TDestinationGroupDTO)entity).DestinationTypeId;
                destinationGroupDAL.GradeId = ((TDestinationGroupDTO)entity).GradeId;
                //destinationGroupDAL.TDestinationType = (TDestinationType)convert(((TDestinationGroupDTO)entity).TDestinationTypeDTO);
                //destinationGroupDAL.TGrade = (TGrade)convert(((TDestinationGroupDTO)entity).TGradeDTO);
                return destinationGroupDAL;
            }
            else if (getType.Contains("TDestinationType"))
            {
                TDestinationTypeDTO destinationTypeDTO = new TDestinationTypeDTO();
                destinationTypeDTO.DestinationTypeId = ((TDestinationType)entity).DestinationTypeId;
                destinationTypeDTO.DestinationTypeName = ((TDestinationType)entity).DestinationTypeName;
                destinationTypeDTO.ProfessionId = ((TDestinationType)entity).ProfessionId;
                // destinationTypeDTO.TDestinationGroupsDTO = ((TDestinationType)entity).TDestinationGroups;
                //destinationTypeDTO.TProfessionDTO = (TProfessionDTO)convert(((TDestinationType)entity).TProfession);
                return destinationTypeDTO;
            }
            else if (getType.Contains("DTO.tables.TDestinationTypeDTO"))
            {
                TDestinationType destinationTypeDAL = new TDestinationType();
                destinationTypeDAL.DestinationTypeId = ((TDestinationTypeDTO)entity).DestinationTypeId;
                destinationTypeDAL.DestinationTypeName = ((TDestinationTypeDTO)entity).DestinationTypeName;
                destinationTypeDAL.ProfessionId = ((TDestinationTypeDTO)entity).ProfessionId;
                // destinationTypeDAL.TDestinationGroups = ((TDestinationTypeDTO)entity).TDestinationGroupsDTO;
                //destinationTypeDAL.TProfession = (TProfession)convert(((TDestinationTypeDTO)entity).TProfessionDTO);
                return destinationTypeDAL;
            }
            else if (getType.Contains("TProject"))
            {
                TProjectDTO projectDTO = new TProjectDTO();
                projectDTO.ProjectId = ((TProject)entity).ProjectId;
                projectDTO.ProjectName = ((TProject)entity).ProjectName;
                projectDTO.IdProfession = ((TProject)entity).IdProfession;
                projectDTO.Status = ((TProject)entity).Status;
                projectDTO.IdBeforeProject = ((TProject)entity).IdBeforeProject;
                return projectDTO;
            }
            else if (getType.Contains("DTO.tables.TProjectDTO"))
            {
                TProject projectDAL = new TProject();
                projectDAL.ProjectId = ((TProjectDTO)entity).ProjectId;
                projectDAL.ProjectName = ((TProjectDTO)entity).ProjectName;
                projectDAL.IdProfession = ((TProjectDTO)entity).IdProfession;
                projectDAL.Status = ((TProjectDTO)entity).Status;
                projectDAL.IdBeforeProject = ((TProjectDTO)entity).IdBeforeProject;
                return projectDAL;
            }
            else if (getType.Contains("TAssistantToProject"))
            {
                TAssistantToProjectDTO assToProjectDTO = new TAssistantToProjectDTO();
                assToProjectDTO.AssistantToProjectId = ((TAssistantToProject)entity).AssistantToProjectId;
                assToProjectDTO.IdAssistant = ((TAssistantToProject)entity).IdAssistant;
                assToProjectDTO.IdProject = ((TAssistantToProject)entity).IdProject;
                return assToProjectDTO;
            }
            else if (getType.Contains("DTO.tables.TAssistantToProjectDTO"))
            {
                TAssistantToProject assToProjectDAL = new TAssistantToProject();
                assToProjectDAL.AssistantToProjectId = ((TAssistantToProjectDTO)entity).AssistantToProjectId;
                assToProjectDAL.IdProject = ((TAssistantToProjectDTO)entity).IdProject;
                assToProjectDAL.IdAssistant = ((TAssistantToProjectDTO)entity).IdAssistant;
                return assToProjectDAL;
            }
            else if (getType.Contains("TStudent_"))
            {
                TStudentDTO studentDTO = new TStudentDTO();
                studentDTO.StudentId = ((TStudent)entity).StudentId;
                studentDTO.Id = ((TStudent)entity).Id;
                studentDTO.PreviousName = ((TStudent)entity).PreviousName;
                studentDTO.IdProject = ((TStudent)entity).IdProject;
                studentDTO.IdUser = ((TStudent)entity).IdUser;
                studentDTO.Year = ((TStudent)entity).Year;
                studentDTO.GradeId = ((TStudent)entity).GradeId;
                studentDTO.FinalMark = ((TStudent)entity).FinalMark;
                studentDTO.IdSchool = ((TStudent)entity).IdSchool;
                studentDTO.ProfessionId = ((TStudent)entity).ProfessionId;
                studentDTO.Status = ((TStudent)entity).Status;
                return studentDTO;
            }
            else if (getType.Contains("DTO.tables.TStudentDTO"))
            {
                TStudent studentDAL = new TStudent();
                studentDAL.StudentId = ((TStudentDTO)entity).StudentId;
                studentDAL.Id = ((TStudentDTO)entity).Id;
                studentDAL.PreviousName = ((TStudentDTO)entity).PreviousName;
                studentDAL.IdProject = ((TStudentDTO)entity).IdProject;
                studentDAL.IdUser = ((TStudentDTO)entity).IdUser;
                studentDAL.Year = ((TStudentDTO)entity).Year;
                studentDAL.GradeId = ((TStudentDTO)entity).GradeId;
                studentDAL.FinalMark = ((TStudentDTO)entity).FinalMark;
                studentDAL.IdSchool = ((TStudentDTO)entity).IdSchool;
                studentDAL.ProfessionId = ((TStudentDTO)entity).ProfessionId;
                studentDAL.Status = ((TStudentDTO)entity).Status;
                return studentDAL;
            }
            return null;


            
            

        }
    }
}

