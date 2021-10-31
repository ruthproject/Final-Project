using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class TAssistantDTO
    {
        public int AssistantId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<bool> Status { get; set; }
        public Nullable<int> ProfessionId { get; set; }
        public  TUserDTO TUserDTO { get; set; }
        public  ICollection<TAssistantHoursDTO> TAssistantHoursDTO { get; set; }
        public  ICollection<TAssistantToProjectDTO> TAssistantToProjectsDTO { get; set; }
    }
}
