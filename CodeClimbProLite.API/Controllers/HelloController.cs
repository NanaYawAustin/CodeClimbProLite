﻿using Microsoft.AspNetCore.Mvc;

namespace CodeClimbProLite.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello from CodeClimb API! 🚀");
        }
    }
}
