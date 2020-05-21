using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ActionResult<bool> Post([FromBody] string value)
        {
            return true;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<bool> Put(int id, [FromBody] string value)
        {
            return true;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult<bool> Delete(int id)
        {
            return true;
        }
    }
}
