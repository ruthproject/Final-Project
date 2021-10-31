using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
   public class TStudentDTO
    {
        public int StudentId { get; set; }
        public string Id { get; set; }
        public string PreviousName { get; set; }
        public int IdProject { get; set; }
        public int IdUser { get; set; }
        public Nullable<int> Year { get; set; }
        public Nullable<int> GradeId { get; set; }
        public Nullable<int> FinalMark { get; set; }
        public Nullable<int> IdSchool { get; set; }
        public Nullable<int> ProfessionId { get; set; }
        public Nullable<bool> Status { get; set; }

     
    }
}
