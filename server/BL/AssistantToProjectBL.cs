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
    public class AssistantToProjectBL
    {
        public IEnumerable<TAssistantToProjectDTO> GetAssistantById(int id)
        {

            var list = new AssistantToProjectDAL().GetAllAssistantToProject();

            foreach (var ass in list)
            {
                if (ass.IdAssistant == id)
                    yield return (TAssistantToProjectDTO)conv.convert(ass);
            }
        }

        public IEnumerable<TProjectDTO> GetProjectByIdAss(int id)
        {

            var list = new AssistantToProjectDAL().GetAllAssistantToProject();

            foreach (var ass in list)
            {
                if (ass.IdAssistant == id)
                    yield return (TProjectDTO)conv.convert(new ProjectDAL().GetProject((int)(ass.IdProject)));
            }
        }
    }
}
