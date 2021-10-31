using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
   public class TAssistantToProjectDTO
    {
        public int AssistantToProjectId { get; set; }
        public Nullable<int> IdAssistant { get; set; }
        public Nullable<int> IdProject { get; set; }

        public  TAssistantDTO TAssistantDTO { get; set; }
       //public  TProjectDTO TProjectDTO { get; set; }
    }
}
