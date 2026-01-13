interface DiscordUser {
	id: number;
	username: string;
	discriminator: string;
	global_name?: string;
	avatar?: string;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	banner?: string;
	accent_color?: number;
	locale?: string;
	flags?: number;
	premium_type?: number;
	public_flags?: number;
	avatar_decoration_data?: {
		asset: string;
		sku_id: number;
	};
	collectibles?: {
		nameplate: {
			sku_id: number;
			asset: string;
			label: string;
			palette: string;
		};
	};
	primary_guild?: {
		identity_guild_id?: number;
		identity_enabled?: boolean;
		tag?: string;
		badge?: string;
	};
}
