"use client"

import { TeamMember } from "@/components/team-member"
import { useLanguage } from "@/hooks/use-language"
import { teamMembers } from "@/lib/data"

export default function TeamPage() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">{t.team.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t.team.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <TeamMember
                            key={member.id}
                            name={member.name}
                            title={member.title}
                            specialty={member.specialty}
                            bio={member.bio}
                            education={member.education}
                            image={member.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
