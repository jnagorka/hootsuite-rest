﻿using Hootsuite.Rest.Require;
using System;

namespace Hootsuite.Rest
{
    internal static class util
    {
        static Action<string> _logger = (x) => { };

        public static string createPath(params string[] args)
        {
            var path = $"{config.api_version}/{string.Join("/", args)}";
            return path;
        }

        public static string createScimPath(params string[] args)
        {
            var path = $"v2/scim/{string.Join("/", args)}";
            return path;
        }

        public static string createOwlyPath(params string[] args)
        {
            var path = $"{config.apiOwly_version}/{string.Join("/", args)}";
            return path;
        }

        public static Action<string> logger
        {
            get { return _logger; }
            set { _logger = value ?? throw new ArgumentNullException("value"); }
        }
    }
}