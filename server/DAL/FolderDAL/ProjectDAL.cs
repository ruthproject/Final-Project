using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ProjectDAL
    {
        public ProjectDAL()
        {

        }
        public IEnumerable<TProject> GetAllProject()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {

                    return pm.TProjects.ToList();
                }
            }
            catch
            {
                return null;
            }
        }


        public TProject GetProject(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return  pm.TProjects.Single(s => s.ProjectId == id);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        
        //public string f()
        //{
        //    try
        //    {
        //        using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
        //        {
        //            var test = (
        //                 from u in pm.TProjects
        //                 join ur in pm.TStudents on u.ProjectId equals ur.IdProject
        //                 join r in pm.TUsers on ur.IdUser equals r.UserId
        //                 group r by u into g
        //                 select new { projectName = g.Key, name = string.Join(",", g.Select(y => y.LastName)) }
        //                   ) ;
        //            //var r = pm.TProjects.Join(pm.TStudents,
        //            //    e => e.ProjectId,
        //            //    d => d.IdProject, (er, ed) => new
        //            //    {
        //            //        projectName = er.ProjectName,
        //            //        status = er.Status,
        //            //        idUser = ed.IdUser
        //            //    }).Join(pm.TUsers,
        //            //    d => d.idUser,
        //            //    u => u.UserId, (de, du) => new
        //            //    {
        //            //        fullName = du.FirstName
        //            //    }
        //            //    ).ToString();
        //            return r;
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

        public void Delete(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    var ass = pm.TProjects.Where(s => s.ProjectId == id);
                    pm.TProjects.RemoveRange(ass);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(int id, TProject project)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    //מחקנו והוספנו לסוף  ולא למקום)(כמו שרצינו
                    var ass = pm.TProjects.Where(assi => assi.ProjectId == id);
                    pm.TProjects.RemoveRange(ass);
                    pm.TProjects.Add(project);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Post(TProject project)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    pm.TProjects.Add(project);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        //*********************
        //try
        //public  IEnumerable<TProject> GetStudentsByProject(TProject project)
        //{
        //    try
        //    {
        //        using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
        //        {
        //            pm.TProjects.Add(project);
        //            pm.SaveChanges();
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}
        public IEnumerable<TStudent> GetProjectByStudent()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TStudents.ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
