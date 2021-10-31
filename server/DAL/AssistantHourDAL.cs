using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace DAL
{
    public class AssistantHourDAL
    {


        public AssistantHourDAL()
        {

        }

        //public IEnumerable<TAssistantHour> GetAllAssistantHours()
        //{
        //    try
        //    {
        //        using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
        //        {
        //            return pm.TAssistantHours.ToList();
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        return null;
        //    }
        //}

        //******************to change it to do where by idProject-to add it in sql db****************

        public IEnumerable<TAssistantHour> GetAllAssistantHours(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TAssistantHours.Where(s => s.AssistantHoursId == id).ToList();
                }
            }
            catch
            {

                return null;
            }
        }

        public void Delete(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    var AssistantHours = pm.TAssistantHours.Where(s => s.AssistantHoursId == id);
                    pm.TAssistantHours.RemoveRange(AssistantHours);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(int id, TAssistantHour AssistantHour)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    //מחקנו והוספנו לסוף  ולא למקום)(כמו שרצינו
                    var use = pm.TAssistantHours.Where(i => i.AssistantHoursId == id);

                    pm.TAssistantHours.RemoveRange(use);
                    pm.TAssistantHours.Add(AssistantHour);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Post(TAssistantHour AssistantHour)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    pm.TAssistantHours.Add(AssistantHour);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
