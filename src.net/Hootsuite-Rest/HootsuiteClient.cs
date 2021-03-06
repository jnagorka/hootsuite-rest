﻿using Hootsuite.Api;
using System;

namespace Hootsuite
{
    /// <summary>
    /// Class HootsuiteClient.
    /// </summary>
    public class HootsuiteClient
    {
        Connection _connection;
        ConnectionOwly _connectionOwly;

        /// <summary>
        /// Initializes a new instance of the <see cref="HootsuiteClient"/> class.
        /// </summary>
        /// <param name="options">The options.</param>
        public HootsuiteClient(dynamic options)
        {
            _connection = new Connection(options);
            _connectionOwly = new ConnectionOwly(options);
            //
            Me = new Me(this, _connection);
            Media = new Media(this, _connection);
            Members = new Members(this, _connection);
            Messages = new Messages(this, _connection);
            Organizations = new Organizations(this, _connection);
            Scim = new Scim(this, _connection);
            SocialProfiles = new SocialProfiles(this, _connection);
            Teams = new Teams(this, _connection);
            Owly = new Owly(this, _connectionOwly);
        }

        /// <summary>
        /// Gets me.
        /// </summary>
        /// <value>Me.</value>
        public Me Me { get; private set; }
        /// <summary>
        /// Gets the media.
        /// </summary>
        /// <value>The media.</value>
        public Media Media { get; private set; }
        /// <summary>
        /// Gets the members.
        /// </summary>
        /// <value>The members.</value>
        public Members Members { get; private set; }
        /// <summary>
        /// Gets the messages.
        /// </summary>
        /// <value>The messages.</value>
        public Messages Messages { get; private set; }
        /// <summary>
        /// Gets the organizations.
        /// </summary>
        /// <value>The organizations.</value>
        public Organizations Organizations { get; private set; }
        /// <summary>
        /// Gets the scim.
        /// </summary>
        /// <value>The scim.</value>
        public Scim Scim { get; private set; }
        /// <summary>
        /// Gets the social profiles.
        /// </summary>
        /// <value>The social profiles.</value>
        public SocialProfiles SocialProfiles { get; private set; }
        /// <summary>
        /// Gets the teams.
        /// </summary>
        /// <value>The teams.</value>
        public Teams Teams { get; private set; }
        /// <summary>
        /// Gets the owly.
        /// </summary>
        /// <value>The owly.</value>
        public Owly Owly { get; private set; }

        /// <summary>
        /// Gets the access token.
        /// </summary>
        /// <value>The access token.</value>
        public string AccessToken
        {
            get => _connection.AccessToken;
            set => _connection.AccessToken = value;
        }

        /// <summary>
        /// Gets the logger.
        /// </summary>
        /// <value>The logger.</value>
        public static Action<string> Logger
        {
            get => util.logger;
            set => util.logger = value;
        }
    }
}
