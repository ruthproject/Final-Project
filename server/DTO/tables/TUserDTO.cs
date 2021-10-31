using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    public class TUserDTO
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public Nullable<int> UserPermissionId { get; set; }
        public string UserPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NumbarPhone { get; set; }
        public string Mail { get; set; }

        //public  ICollection<TAssistantDTO> TAssistants { get; set; }
       // public TPermissionDTO TPermission { get; set; }
       // public  ICollection<TStudentDTO> TStudent { get; set; }
    }
}
