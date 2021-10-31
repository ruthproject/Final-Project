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
    public class ProjectBL
    {
        public IEnumerable<TProjectDTO> GetAll()
        {
            var list = new ProjectDAL().GetAllProject();
            foreach (var project in list)
            {
                yield return (TProjectDTO)conv.convert(project);
            }
        }



        public TProjectDTO GetProjectById(int id)
        {

            return (TProjectDTO)conv.convert(new ProjectDAL().GetProject(id));
        }


        //public string ff()
        //{
        //   return new ProjectDAL().f();
        //}

        public void Post(TProjectDTO value)
        {
            new ProjectDAL().Post((TProject)conv.convert(value));
        }



        public void Put(int id, TProjectDTO value)
        {
            new ProjectDAL().Put(id, (TProject)conv.convert(value));
        }



        public void Delete(int id)
        {
            new ProjectDAL().Delete(id);
        }
        //public void GetStudentsByProject(int id)
        //{
        //    new ProjectDAL()
        //}

        //******************
        //begin try
        public IEnumerable<TStudentDTO> GetStudentsByProject(int id)
        {

            var list = new ProjectDAL().GetProjectByStudent();

            foreach (var ass in list)
            {
                if (ass.IdProject == id)

                    yield return (TStudentDTO)conv.convert(new StudentDAL().GetProjectByStu((int)(ass.IdProject)));
            }
        }

    }
}
