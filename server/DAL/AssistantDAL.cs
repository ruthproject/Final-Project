using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace DAL
{
    public class AssistantDAL
    {
        public AssistantDAL()
        {

        }
        public IEnumerable<TAssistant> GetAllAssistant()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                   return pm.TAssistant.ToList();
                }
               
            }
            catch(Exception ex)
            {
                return null;
            }
        }


        public TAssistant GetAssistant(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TAssistant.Single(s => s.AssistantId == id);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public void Delete(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    var ass = pm.TAssistant.Where(s => s.AssistantId == id);
                    pm.TAssistant.RemoveRange(ass);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(int id,TAssistant assistant)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    //מחקנו והוספנו לסוף  ולא למקום)(כמו שרצינו
                    var ass = pm.TAssistant.Where(assi => assi.AssistantId == id);
                    
                    pm.TAssistant.RemoveRange(ass);
                    pm.TAssistant.Add(assistant);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Post(TAssistant assistant)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    pm.TAssistant.Add(assistant);
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
