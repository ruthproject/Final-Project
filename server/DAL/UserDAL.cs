using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace DAL
{
    public class UserDAL
    {
        public UserDAL()
        {

        }
        public IEnumerable<TUser> GetAllUsers()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TUsers.ToList();
                }
            }
            catch(Exception e)
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
                    var user = pm.TUsers.Where(s => s.UserId == id);
                    pm.TUsers.RemoveRange(user);
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
                    var use = pm.TUsers.Where(i => i.UserId == id);

                    pm.TUsers.RemoveRange(use);
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