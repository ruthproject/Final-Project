using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserDAL
     
    {
        public UserDAL()
        {

        }
        public IEnumerable<TUser> GetAllUser()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {

                    return pm.TUsers.ToList();
                }
            }
            catch
            {
                return null;
            }
        }


        public TUser GetUser(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TUsers.Single(s => s.UserId == id);
                }
            }
            catch (Exception)
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
                    var ass = pm.TUsers.Where(s => s.UserId == id);
                    pm.TUsers.RemoveRange(ass);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(int id, TUser user)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    //מחקנו והוספנו לסוף  ולא למקום)(כמו שרצינו
                    var ass = pm.TUsers.Where(assi => assi.UserId == id);
                    pm.TUsers.RemoveRange(ass);
                    pm.TUsers.Add(user);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Post(TUser user)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    pm.TUsers.Add(user);
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
