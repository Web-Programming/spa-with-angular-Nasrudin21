import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './components/profile-header/profile-header';
import { StatsCardComponent } from './components/stats-card/stats-card';
import { AboutCardComponent } from './components/about-card/about-card';
import { SocialCardComponent } from './components/social-card/social-card';
import { PropertyItemComponent } from './components/property-item/property-item';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item';
import { HistoryItemComponent } from './components/history-item/history-item';
import { UserProfile, StatsSummary, PropertyItem, FavoriteItem, HistoryItem, SocialLinks } from './profile.models';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    StatsCardComponent,
    AboutCardComponent,
    SocialCardComponent,
    PropertyItemComponent,
    FavoriteItemComponent,
    HistoryItemComponent
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile {
  user: UserProfile = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '+62 812-3456-7890',
    location: 'Jakarta, Indonesia',
    avatar: '/assets/images/avatar.png',
    isPremium: true,
    isVerified: true,
    memberSince: '2021',
    bio: 'Seorang profesional di bidang properti dengan pengalaman 5+ tahun.',
    job: 'Real Estate Agent',
    birthdate: '1995-04-12',
    status: 'Online',
  };

  stats: StatsSummary = {
    properties: 12,
    favorites: 34,
    rating: 4.8,
    memberSince: '2021',
  };

  socialLinks: SocialLinks = {
    facebook: 'https://facebook.com/johndoe',
    instagram: 'https://instagram.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  };

  properties: PropertyItem[] = [
    {
      id: 1,
      title: 'Apartemen Modern di Sudirman',
      location: 'Sudirman, Jakarta',
      price: 8500000,
      image: '/assets/images/property1.jpg',
      bedrooms: 2,
      bathrooms: 1,
      area: 42,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Kost Eksklusif Dekat Kampus',
      location: 'Depok, Jawa Barat',
      price: 2500000,
      image: '/assets/images/property2.jpg',
      bedrooms: 1,
      bathrooms: 1,
      area: 20,
      status: 'Pending'
    }
  ];

  favorites: FavoriteItem[] = [
    {
      id: 1,
      title: 'Rumah Minimalis',
      location: 'BSD, Tangerang',
      price: 950000000,
      image: '/assets/images/fav1.jpg',
      bedrooms: 3,
      bathrooms: 2,
      area: 98,
      rating: 4.9
    }
  ];

  history: HistoryItem[] = [
    {
      icon: 'bi-check-circle-fill',
      iconColor: 'success',
      title: 'Pembayaran Berhasil',
      description: 'Sewa Apartemen Sudirman',
      time: '2 hari yang lalu',
      badge: 'Rp 8.500.000',
      badgeColor: 'success'
    },
    {
      icon: 'bi-clock-history',
      iconColor: 'info',
      title: 'Melihat Properti',
      description: 'Rumah Minimalis BSD',
      time: '1 minggu lalu'
    }
  ];

  onEditProfile() {
    console.log('Edit profile clicked');
  }

  onSettings() {
    console.log('Settings clicked');
  }

  onEditProperty(id: number) {
    console.log('Edit property:', id);
  }

  onDeleteProperty(id: number) {
    console.log('Delete property:', id);
  }
}