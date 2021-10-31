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
  public  class StudentBL
    {
        public IEnumerable<TStudentDTO> GetAll()
        {
            var list =new StudentDAL().GetAllStudents();
            foreach (var student in list)
            {
                yield return (TStudentDTO)conv.convert(student);
            }
        }



        //public TUserDTO GetUserById(int id)
        //{

        //    return (TUserDTO)conv.convert(new UserDAL(). GetUser(id));
        //}



        //public void Post(TUserDTO value)
        //{
        //    new UserDAL().Post((TUser)conv.convert(value));
        //}




        //public void Put(int id, TUserDTO value)
        //{
        //    new UserDAL().Put(id, (TUser)conv.convert(value));
        //}




        //public void Delete(int id)
        //{
        //    new UserDAL().Delete(id);
        //}
        
    }
}
