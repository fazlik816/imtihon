import { useState } from 'react';
import { TeachersHero, TeachersToolbar, TeacherCard } from '../components/teachers';

import { Pagination } from '../components/courses';
import { teachersList } from '../data/teachers.data';

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Barchasi');

  const filteredTeachers = teachersList.filter((teacher: any) => {
    const matchesSearch =
      teacher.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.role?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = activeFilter === 'Barchasi' || teacher.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white">
      <TeachersHero />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <TeachersToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTeachers.map((teacher: any) => (
            <TeacherCard key={teacher.name || teacher.id} teacher={teacher} />
          ))}
        </div>

        <Pagination totalPages={3} />
      </section>
    </div>
  );
};

export default Teachers;
