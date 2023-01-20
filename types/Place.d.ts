type PlaceEntity = {
  type: 'Feature';
  properties: {
    uuid: string;
    name?: string;
    slug: string;
    proximity?: number;
    user: {
      identifier: string;
      first_name: string;
      last_name: string;
      ambassador: boolean;
      staff: boolean;
      admin: boolean;
    };
    partner?: {
      name: string;
      slug: string;
      website: string;
      logo_url?: string;
    };
    partner_identifier?: string;
    google_place_id?: string;
    contact_details: {
      email?: string;
      phone?: string;
      website?: string;
      booking_url?: string;
      facebook_username?: string;
    };
    address_components: {
      address?: string;
      city?: string;
      postal_code?: string;
      province?: string;
      country: string;
    };
    activities: Array<{
      sport_id: number;
      photo_reference?: string;
      booking_url?: string;
      title?: string;
      user: {
        identifier: string;
        first_name: string;
        last_name: string;
        ambassador: boolean;
        staff: boolean;
        admin: boolean;
      };
      image?: string;
      tags?: any[];
      attributes?: any[];
    }>;
    reviews: any[];
    notes?: string;
    photo_reference?: string;
    updated_at: string;
    created_at: string;
    attachments: any[];
    quality_indicator: number;
    featured: boolean;
    featured_by?: string;
  };
  geometry: {
    type: string;
    coordinates?: number[][];
  };
};

type PlaceResponseEntity = {
  links: {
    self: string;
    first: string;
    next: string;
    last: string;
  };
  count: number;
  data: {
    type: string;
    features: PlaceEntity[];
  };
};
