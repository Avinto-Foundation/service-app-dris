import type { Service } from "../types/service";

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={service.imageUrl}
        alt={service.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {service.name}
            </h2>

            <p className="text-sm font-medium text-blue-600">
              {service.category}
            </p>
          </div>

          <div className="rounded-lg bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {service.rating}
          </div>
        </div>

        <p className="mb-3 text-sm text-gray-500">
          {service.reviewCount} reviews
        </p>

        <div className="space-y-2 text-sm text-gray-600">
          <p>📍 {service.address}</p>
          <p>📞 {service.phone}</p>
          <p>🚗 {service.distanceMiles} miles away</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            ${service.price}
          </p>

          <span className="text-sm text-gray-500">
            starting price
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;