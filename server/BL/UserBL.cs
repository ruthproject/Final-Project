using DAL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using conv = BL.Convert;


namespace BL
{
    public class UserBL
    {
        public IEnumerable<TUserDTO> GetAll()
        {
            var list = new UserDAL().GetAllUsers();
            foreach (var user in list)
            {
                yield return (TUserDTO)conv.convert(user);
            }
        }


        public TUserDTO GetUserById(int id)
        {

            return (TUserDTO)conv.convert(new UserDAL().GetUser(id));
        }

        public void Post(TUserDTO value)
        {
            new UserDAL().Post((TUser)conv.convert(value));
        }

        public void Put(int id, TUserDTO value)
        {
            new UserDAL().Put(id, (TUser)conv.convert(value));
        }

        public void Delete(int id)
        {
            new UserDAL().Delete(id);
        }
    }
}