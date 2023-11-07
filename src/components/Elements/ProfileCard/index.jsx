const ProfileCard = ({ name, study, imgSrc }) => {
    return (
        <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                    <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={imgSrc} alt="" />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div class="flex min-h-full flex-col items-center justify-center">
                        <h1 class="text-3xl font-bold">{name}</h1>
                        <p class="text-base">{study}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard