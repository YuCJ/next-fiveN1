import swal from 'sweetalert';
import * as yup from 'yup';

export const appendParameters = parameters => {
  const url = new URL(process.env.NEXT_PUBLIC_API_URL);

  Object.keys(parameters).forEach(key =>
    url.searchParams.append(key, parameters[key])
  );

  return url;
};

export const handleResponse = response => {
  const data = Object.entries(response);
  if (data.length === 0) {
    return {
      hasData: false,
      data: []
    };
  }

  return {
    hasData: true,
    data: data[0][1]
  };
};

export const handleError = response => {
  const { ok, statusText } = response;

  if (ok) {
    return response;
  } else {
    const error = new Error(statusText);
    error.response = response;
    swal('Oops!', '591 租屋網目前沒有回應！😥', 'error');

    return Promise.reject(error);
  }
};

export const pageView = url =>
  window.gtag('config', process.env.TRACKING_ID, {
    page_location: url
  });

export const validationSchema = yup.object().shape({
  urlJump: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  section: yup.array(
    yup.object().shape({
      label: yup.string().required(),
      value: yup.number().required()
    })
  ),
  area: yup.object().shape({
    label: yup.string().required(),
    value: yup.string()
  }),
  floor: yup.object().shape({
    label: yup.string().required(),
    value: yup.string()
  }),
  order: yup.object().shape({
    label: yup.string(),
    value: yup.string()
  }),
  rentPrice: yup.object().shape({
    label: yup.string().required(),
    value: yup.string()
  }),
  orderType: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().required()
  }),
  kind: yup.object().shape({
    label: yup.string().required(),
    value: yup.number().required()
  }),
  hasImage: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().nullable()
  }),
  role: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().nullable()
  }),
  notCover: yup.object().shape({
    label: yup.string().required(),
    value: yup.string().nullable()
  }),
  sex: yup.object().shape({
    label: yup.string().required(),
    value: yup.number().required()
  }),
  option: yup.array(
    yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
  ),
  other: yup.array(
    yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
  ),
  shape: yup.array(
    yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
  )
});
