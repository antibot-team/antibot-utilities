interface IParseOptions {
  user?: void;
  userName?: void;
  userID?: void;
  guildName?: void;
  guildID?: void;
}

export class Variables<K, V> {
  constructor() {}
  public parse<K, V extends string>(
    message: V,
    options: IParseOptions
  ): string {
    let msg: string = message;
    const Variables = {
      "{user}": options.user,
      "{user.name}": options.userName,
      "{user.id}": options.userID,
      "{server.name}": options.guildName,
      "{server.id}": options.guildID,
    };
    if (typeof message === ("string" as K)) {
      for (const [K, V] of Object.entries(Variables)) {
        msg = msg.replace(new RegExp(K, "g"), V as null);
      }
      return msg;
    }
  }
}
